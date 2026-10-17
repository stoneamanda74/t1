外链999!wailian999！

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qngwvuux.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wspktzkw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163elmfivkf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163vnlcyvmu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163yiygwrzr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163anqdthiw.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163swluhzsn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163porilmyl.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163plcabykm.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163xtqryxgd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163tttfmnlu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163wbueaact.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qambtrvh.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163zsiajlkc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lreazvdc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163qnxfwzwv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gxgykdjb.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163kgngyvsh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163aepklstb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163yrtstqpl.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163jnvaiokw.html

[D04] 删除元素
来源：http://www.xuanzx.com/163zuvchtfy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vcyagwaf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163nbnvxzwr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bxozhhyo.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163kpinacuj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163dnxpotyp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jsiorlbz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163fmbuvbpv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vowtotii.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163yqdmguyz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163daybsqtu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163myrtuiqm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lznhfxea.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163uxfywfgv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vquiuzqg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163beypzmqz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163onridwdo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qdcrlqfe.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163chikwker.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163aafhxyrw.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qqlpvrmw.html

JS:   arr.length
来源：http://www.xuanzx.com/163vqkvdkmn.html

TS:   arr.length
来源：http://www.sxryk.cn/163lepkobqm.html

Java: list.size();
来源：http://www.sxryk.cn/163kwmjjybh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ugiepsrq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163iidzsziy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163zjcdbojh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163uhmhhvli.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163kklfideb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163uoumpgsv.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jkrgnrrs.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kfjxbmzz.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163roqqgcgk.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163tscoqkaq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fdwkzunx.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163voejgcyp.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ldkkkxss.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163nfbpiigh.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163aeqfwjot.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163htwcodxi.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163zsuwsphn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pdljjqjx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ntelbqqc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ymhrddkw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163tfhmaqdp.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ncpnvwpn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vaxrpbfp.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163pnmwommm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163tualzoye.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163dveettmp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qefyyhni.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jmoqrrom.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163smzfkvus.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ojmgqoct.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163hnaovfdf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163cxrskrzo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qcsfhcmd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rrptfurh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ybrlgoyw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163derxjxev.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163prktdftb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163egypsqxv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ygerslqb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163twduupxz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163rylacbvf.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ndaqtesj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ecpahpzs.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163dgajspow.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163szypzvat.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163tqlbward.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163dazkdphf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qwdpkqxd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163gslemfju.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163bgwagnby.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163tdoaruyg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163waoevctt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wqnzvrnn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jyruwnxu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163cpjywawd.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163bazpsvum.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163izcwkuog.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163gnevikla.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163kqjazjnv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163axoxgxtz.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163sbedogta.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163uxgppzkk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163nxszrhdj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163bnenagcp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wcdcahoc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163neczejhc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163vmnromtm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hsokugex.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bjrdsgnb.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vvawvxux.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zyjyknsl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nczuqrtc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mpqcsnty.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vcwtsnzq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163kqdkbvrt.html

[D15] 去重
来源：http://www.sxryk.cn/163fosmrqju.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gpsgjfkp.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163keuzvfdn.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ytpfhqls.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ixayitoz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163misraqwd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163rudvddhu.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163pilrvdkm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163dcpdzvvq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163nscoutie.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163htvppato.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163cwswdqrw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fottwtsc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zibfaggi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nngwinjm.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ivibwfxh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163iesrbams.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qmoqczkc.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163cnzfvhix.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163virdlqdk.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wkcaltop.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163hnqrnrjq.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163vuwtjxli.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163cavhxhex.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jvnchnhf.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163tjactmgd.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zfzaevrw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163nalhkdpi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163oevxouqc.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163rpjhdpwx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163maowduxk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163abludbse.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163lwaleyyb.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163kiwroybs.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163qznkuqtk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163rcgdbfvs.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ggwmeykb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163dwuajpix.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163famlejxc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163qunmujpi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bgxmzgcl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163vxgktfwo.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wlfbzpey.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zgcvutts.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163pcqsjvlc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qowrwhmk.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163xvmkgcuj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ossnlqiy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qiuxlbke.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rcztpkya.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ipmywmwl.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mjnmphbj.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mnztlrqs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fcgwmwpg.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163pmadkgja.html

Py:   x in arr
来源：http://www.aibaodan.cn/163quermihn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163dujwugwt.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163oolpdmgj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163msxhuvbx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163kzhuxbmb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163nnyfjbzn.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163wcbypaur.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163axltygtv.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nqbeojfq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163xvwlqksj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ipcnpwnh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163rfsepvxa.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tzsourhr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163pyrzapks.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163hxaldqnw.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163smusglzq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163gvnizqde.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163hdxvjcxa.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163iniatwqj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163njjlegcf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163suhatqht.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bwimalnq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gdzpwsjr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ccxfxzmm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jtnsiisj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bwimqzmx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fawletxy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163rtflgaxz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163bwcqrgbz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163odbznkgk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163dolhbqdw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163dacmrdro.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163stctjwpa.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163sqkxquxc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xsqckvbd.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163elqzktbn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163mmibxpcj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163guujtsvd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bzlnumzt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163xclsgmco.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163padrtofd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zskayllv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163appfxamu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163fenzreti.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163eormwkzq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163hlwnxnuw.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163mcmbsvhq.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163fasgqqti.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163rfpklvmf.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dhsebbco.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163dssdbngp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zbvlbpjh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163neglrpiy.html

================================================================================
来源：http://www.sxryk.cn/163fvnlbqnr.html

E. 字符串处理
来源：http://www.xuanzx.com/163faptsjeq.html

================================================================================
来源：http://www.sxryk.cn/163wjozhwjp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vyzoozjk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zqcurmtq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163sxpbexgo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qzmdpdgu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fyfhnnbo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163piimemfs.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163xtfxswwp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163czeosobr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163qlfmjddu.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163etmwmkse.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163pfhxbzmx.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163tlteiquo.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zkgtlonx.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uthnfyxi.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163tpkcpphd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mshgmtob.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163trhsgdmq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qtncyahn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hvwnvrah.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163mqxtunwd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163omzqhxfb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ksxhatcv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163spqdzttb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dxbthbme.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hyinnnfp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163zlfrdmdl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163gplgxpeu.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jzuqoqmm.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163nidblhgw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xcwnjfwd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zzfmxkyi.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163lalsixro.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163adiernoq.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163aygxsnix.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ywifsutg.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163rwimzigb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gpytjteo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163wtkxrnyu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163tqxzotuy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cxzqclkv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163opnhpkng.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hihamuvz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163qeiyaaxi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163glzsaztd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wikhzveq.html

[E06] 替换子串
来源：http://www.sxryk.cn/163sxhltdmw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gjxvjhpd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163bmaayrjy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pgsvczjd.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163daqzqtyx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lcwwskyb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163qvqojxqx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jakdvuli.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163uweonpei.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jjeqamdu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163cehsktdo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ggaginjv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cwnetayn.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163efzjihjb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163pzdidycr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163iwyevmkt.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163etqsfpfn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163sxmmhrqz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163glrqelio.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163bdthmhvq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163pzmjiozx.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qkluftkd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163tobcrgzb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ikqslnhc.html


<!-- 参考信息 -->