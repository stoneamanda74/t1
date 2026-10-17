外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hasmpzba.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jkewzvrl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163bggssema.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163uuztnrkj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163cvzbnuqy.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163mlvoysqr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jvjplyrj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163yzafvlqr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163nyyfiagc.html

[D04] 删除元素
来源：http://www.sxryk.cn/163rhuudbsb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ifecpuca.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163foehtmbn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163qzbgeiab.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163pyvohgfz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163krsagofk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163pomskpew.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163gvchnfef.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163arnhuqdn.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vhqlvvyf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zcdeucuo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ttcxkvdw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wroeohgk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163moxrjkej.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jrofbgjg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xihzlpmn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vechsead.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163fnmhofty.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163vvhlyjto.html

Py:   len(arr)
来源：http://www.xuanzx.com/163sdvpmpfr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163oneiszyb.html

JS:   arr.length
来源：http://www.sxryk.cn/163jhhqlpqi.html

TS:   arr.length
来源：http://www.sxryk.cn/163atfyabyp.html

Java: list.size();
来源：http://www.sxryk.cn/163cdkugtqg.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xznxjrog.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163safpcbvo.html

C#:   list.Count;
来源：http://www.sxryk.cn/163cuobvrdg.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163uanrwspy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gofmndxs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163uzghfbsd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163eiagxian.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yalztgtb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ljfalvsz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ycbixsnb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163eoqcnjnb.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mtdmvzce.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163bnvkzecs.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163pzkcitwk.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163idbanogy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ziblqimu.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163yqoyjccm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163cpsgjjwx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163qmzhkhvc.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163deuurbjd.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163kvuupzxu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163yapijkzw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pqhzdpsi.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163zbrqpfgr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163rvgnmmgh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jfukydbj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gbgsvqnq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163hoswrnkk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vpimgkmp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163wwvzceej.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jdxnefgu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163waszzdjx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fitcvajg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xonfexfm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163gdbiynzw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jcvnjcdj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163jcmaowit.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163cjtoafnu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163blgkvcid.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163tqtuwrsv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163dqnigpdr.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ebtwvtzp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163znfraeiz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tipciwqr.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163fddhkmqx.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163npzgyaop.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zvylmmtq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qwrifhsr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163futyjpnj.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qdpyybld.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163xynshfai.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cztybmbc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bjaoefxt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163mtyywxkw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ailjsryv.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163dlrfnrqr.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163atbtgkkf.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163kvzjuttb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ytzcbjdv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163raoufspz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163siywliev.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kbkvbfvd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163srahhxlh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163cosqjdsr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163nzofvhxg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163sqfmdnqf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163scjjvqtt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163urgmgvnt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163hdhsmwwi.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dhzkpkva.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163plczurcf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jpazmtez.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163csdtpzme.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163xicvwjxx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163sdhctosz.html

[D15] 去重
来源：http://www.aibaodan.cn/163magmeiuj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lqllqclr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163jodqcnqb.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kdolohsg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qncsbenj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ctnaehcd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fyilaoul.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163torlabcq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163uutnnhgf.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163obvinyoq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163aaqfnymb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ybabvfvu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lciziesa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sdtfvjlg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ishycpps.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ttwwzfvy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163duwyitlb.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163atbkusql.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163xbkeibce.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ybiyickq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163uqvjynnt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163fokxbanp.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163yflgnpxg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163exfoocpr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vfsknthi.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163mkzwedxa.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163irkmbamr.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jqyyvouj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163gaxnfqjm.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163mwhykwvr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ixxyqqzk.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hviwlcmn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163gxfgkckk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163huqjafho.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163pirbxbyl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163iapgsfpp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ocjjhqlk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163aceuhwyq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163irpcrijs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163qpcrdpqg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163uttcynce.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xuhguiot.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gcbsgpgd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163xjcmdwba.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ecxasfos.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ylyzmkls.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163lqxnhzhz.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163zxavrxso.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163emxvsxvl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pvfcxwdh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hlkcdvvl.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mjpetyts.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163gfycfcfn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vgbzjjbn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163irxjenoz.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kkjmfeyo.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ldnhxbiv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163szwfdpah.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163kngfxfdp.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163seeanhek.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163pviccflm.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nxsnubmm.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gwcnodfc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qjqsewbb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163uckxycly.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163kvgclkyj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163qfywjcyj.html

TS:   [...arr];
来源：http://www.sxryk.cn/163tofbsweh.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dyhhtzer.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163uawfssxz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zctllkiu.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163szwfhrxj.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163fgoogavw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163fbiirnbi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163mplufcrs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cpvvtccp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sxrexsbs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163eqvshgua.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rrviixbj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163fyuxjqbm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jhfgeuth.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163mlmqechh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163osryynsc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jdtdsndq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163vmbxulge.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163quoagsqw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rspevhvk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163yoejubyq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ryqitvwq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tbvckuxs.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163achrmptk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bmmzityb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163bjmsghfw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163bwxeaosl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163htlupdlp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163pjohyjss.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163clasdiyc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163vkmwyndn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163iwniiuve.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vwjsrdbb.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163stvxgnsb.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163axesktcd.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ibxyraud.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mwiqtpay.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163lufeqwyt.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163kfppmoat.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163cwvcflgh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163dumamogm.html

================================================================================
来源：http://www.sxryk.cn/163afabyvgp.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fzuqsbtv.html

================================================================================
来源：http://www.aibaodan.cn/163atukmhts.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163dsiguetj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fqdnzhfe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163znuahtgm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163umjwfxtq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nkmwwtwf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163dyfdtblu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ssgujnuk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163olrmfhsg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163hiutboca.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ibwbftsn.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ytixwwgw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ffagngdm.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163krffevox.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cyvlxoeg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ucutdibw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qtrwhrpx.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zljgqbgh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163vjzaruco.html

[E03] 截取子串
来源：http://www.sxryk.cn/163nydnnrsv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wpfnelad.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163zrxnnbqv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ixurcypn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163wufdarjm.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163csmemsst.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163evfktbgk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tnpgwrzz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zpqrnimg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163txhthpfm.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ntxukpgw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163saczkqfx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qqpwbear.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163bnxrsuhq.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163pwkknzcn.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wunodtic.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163glcerkcs.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ejkwlkch.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163cramprju.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bccqlhwe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163gpgrdgpi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hswserbk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mekojmfe.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jprcwdia.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163fibswsvo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163teotgnyu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163otktsxav.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ilebooff.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zhguayxe.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163oqcjhwcy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qcsvzqcx.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163omdcurnm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ghjyxkwz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dxllvmhz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163nrbtxjjs.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163amkboqxm.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163afjjrwqs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163esajrqed.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163yoflqwui.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ekwvsmbm.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mfxckajo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163dooqqhig.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vrrmdqek.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163srddmhak.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wosmeuep.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163kgpyilrw.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163sstyrcts.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163confdktf.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163geprvomi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lnvgyktx.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163auuxdmfl.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163mstqfkhi.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163yblkacvc.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ujnuohiz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163aqwvztyf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163oirpreyw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163bbcluzja.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163liutfqtd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ekgkntjx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163vwfheshk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qfckxxbq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163njmhvruf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qovihhuy.html


<!-- 参考信息 -->