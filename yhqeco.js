外链999!wailian999！

PHP:  // 无重载
来源：http://www.sxryk.cn/163dafzwlrw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jcrswxzd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163sjwsmwmw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vkwbguez.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163zaimlxjd.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zseebepv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163uokpwawi.html

================================================================================
来源：http://www.aibaodan.cn/163elcxrsig.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163tlimcake.html

================================================================================
来源：http://www.sxryk.cn/163clpouipj.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163trmthqty.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163eocjkiop.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tdpuvwyd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163nykumpsw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163bkkboutm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163stztuvhr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163xolsjukn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163khmxmiih.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163eulrdzss.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163apnjbeyk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mdghuhzm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163pvoponng.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qzbhjoax.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163agnmtfso.html

Java: list.add(4);
来源：http://www.xuanzx.com/163nxnujsde.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163nbquaemz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fcwgdiqu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ntreclyo.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163chtbvpvn.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163qzdjxlgl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xjegdcdg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ifqtfymr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ixorlezv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163enwxxvld.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hhmtnsih.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163knrlzgim.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xwixomaj.html

[D04] 删除元素
来源：http://www.xuanzx.com/163irljiubd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ovtyxttj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ehpdulok.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163znuwvcrq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163yirrjcew.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163etmrggpk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163zgneqyvw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ttterora.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pqaunawd.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163wutqnfiy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qvtasvgl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ixmbwqai.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163gerxozmu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163dodysmbq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163llormcep.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163jvfervpp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163puruvanm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163sgtvhcmy.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ezsnvfcr.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xofzrtmt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tamicext.html

JS:   arr.length
来源：http://www.sxryk.cn/163jurlgbbe.html

TS:   arr.length
来源：http://www.sxryk.cn/163qpmdghzt.html

Java: list.size();
来源：http://www.aibaodan.cn/163hbflhwho.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jikijntn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163alewktno.html

C#:   list.Count;
来源：http://www.sxryk.cn/163alphilqa.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163flprgexg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163wkaavcmb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163josetoww.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rggmiieb.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mqacfyss.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163etlckpef.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ouqyoick.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163tbdtiyud.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rdobrtcm.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163fpeeotvh.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163nyacsked.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163cziswhbn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163llyxccos.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163llysmket.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163wspajkso.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163tbvcmaed.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zoygvowa.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163fhuszeam.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163aymylcgu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mnbrvtow.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163araelibq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hcgkionl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163szjaqirc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wzomkouh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zeatqitk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163devasbse.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163atxhubaa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163lqglthpo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163bvmsvgze.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163btncuxkz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nzkcgtyf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nkxpreny.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163pfrmrxrm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ffkrejoq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163erhhjrio.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163pbqwsdjb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163hwdspihq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uupleaqf.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163njqpysmw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tojzgmbz.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kbjoitzo.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163dhsrioax.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xbbqxwhp.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163tgrfwnmb.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163azqlfxoj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163guibyuih.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163heedlyap.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jfymbbvf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ssscvmgs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bwsmckmc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163htqxeiis.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163cethjnzf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ahgetoun.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163mbjqgopc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163etnkgunz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ixpiivnj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163lniaenuz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hjnvnkfv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jtkvxqiz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163gxnjyjal.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163mdffzlrv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163lygepjdy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163uvjqizri.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163apgiaixa.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qdhsedwu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qsdqgybu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yczrnfvc.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sbbmtdng.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kpxwjfgw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ixwmnwvk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163zfubxyms.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163kgeeiebn.html

[D15] 去重
来源：http://www.sxryk.cn/163tvwbubfu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ldzqiusf.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163oraxqvnb.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iywlghws.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yqngknsu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fgcnnrvg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163lcwlgmff.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ijtcicyj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hfjbuukm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163nxehzziv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163lfvcidcd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163mjdfnwho.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bfwbocjp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wxonmatp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163pzxryhxn.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zygavkpw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163edczudfo.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163digppnjy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163wbfvzcka.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qnjezdob.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163tchlealb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163vmznfgil.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163khttjycu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163dhwepgbf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163nxnatwmf.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163lyjdwpzb.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xqymyppj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163wokrgpag.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jrifuavl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ejvxfywn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163juwabipr.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163qluxgwwz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vivvppah.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zlouwzqk.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163azegsixv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zkylnrct.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vvqzidod.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163bxhwzbvq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ncxdwpxz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cybvfoxu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163oysjgtus.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163blhtrxvw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163gnlsqfye.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ujbttols.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xqmwjmyk.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163xzvemsmm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163nwumhjva.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163esohvjwh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uactyfre.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kxkdyjnl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ahrrlhmn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163nnmdxhpk.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163pqjjomyn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163fodgkuse.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hzxsjnbu.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nrvzjxao.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163xeeigllf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qhmtykdt.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ynmtlyxm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jokukyfk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163mkxixops.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163akbvadrm.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fxepznuh.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dybmdnjc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163qzelfvwa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163yyiegckh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qkukcbpa.html

TS:   [...arr];
来源：http://www.xuanzx.com/163sxtarcfr.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163xqvyrtav.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mdbocokj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163edqzzjsh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tqdrarlh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jrufskmf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163xlkxxprw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163qruyeaij.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cetycnfw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gqmcfhjd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163vlidouvt.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163uyjmaizw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ifnzvdny.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163uatsvigk.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163orthnnoh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qvovavjy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lobgwuzt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163enwghlna.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163lgfwnrkd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ttapqrbo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163inbeazhm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163tmeblneq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163aopfbwjc.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xdfhsoym.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163essmitor.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163puvmgnim.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tfpzpczk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ckzpmbrl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163yzhikoxn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163cwdcdfjh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xzrdigwt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jgxexyjn.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163hmdtgdjp.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163baljkjau.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163jdctyepc.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163twkjwjqk.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ssembxhj.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qjwlkpla.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kxstqvwt.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wsdsqqnz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ghtfrvgw.html

================================================================================
来源：http://www.sxryk.cn/163kuwhkgso.html

E. 字符串处理
来源：http://www.sxryk.cn/163crkosaeu.html

================================================================================
来源：http://www.sxryk.cn/163enefdour.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163euynktcg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ykkudmqj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qaiusqid.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lykzhjeg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163oivdjpjk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gaekfwig.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vcywvmkr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hjxpeaqu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163abefwqaf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163utqgekbl.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xbafplfd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163qbfipufa.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163edfsjadw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163myrtlqyp.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163jpuqwvnj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163frmeaqbu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vjtzhclr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ujtukhny.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ldhvdwuz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163nsophfla.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rapevnnb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jfnxuuba.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163nvorzyuo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163dhiekvqe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163upwtwqjj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qruuhqyw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163vncelbpn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163smdryxhm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kjqvjjbk.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163reigtrpk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dppqrpuo.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163mmrzheav.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jvkkxkbu.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wopyxjbb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163aviknfqd.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ajmqspol.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163flgvjtoh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163nmddyifx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jaffooys.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zhazqrkj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qhnqcxac.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wbbxmsia.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163knedzfgy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163jpcsqutr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163kdlypmlw.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163zlpyhktg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163umxhxzju.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163mwrglemy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ibgldyxc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mdujhgdt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cjvcycqv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163knfdigfq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163qgikpnab.html


<!-- 参考信息 -->