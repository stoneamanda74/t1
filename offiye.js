外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163bttunosj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163cbxndrws.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163uabramlx.html

[D06] 数组长度
来源：http://www.sxryk.cn/163gqtqxscj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163sjxcvhoc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vvankqkd.html

JS:   arr.length
来源：http://www.sxryk.cn/163nxpkrqyy.html

TS:   arr.length
来源：http://www.aibaodan.cn/163sbopxfyq.html

Java: list.size();
来源：http://www.sxryk.cn/163gljztpky.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ahinurkh.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163okhpjzfb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ujsekjeh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163nashcgvf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xmecraxs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163qzpjcfrm.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ndgkjmpj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163twyrulms.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163sdxlnsdg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ubnjuvle.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ijscfuyv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163axfnotkp.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163raurbcec.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vdtrrwcs.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sfoxzejo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163kdaxtujt.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fichynag.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163udosowuq.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163vccuqqnp.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163dgiydjvw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163pecvwcmw.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vwmlufsp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jgjcdkeu.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163srsnuhsi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vfxjvnwb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163jehlcxuf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163eouryqhk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xgcftlhu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163axrawklu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vbwzelnp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163rhlyblfo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hqkfhbfm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ndusidpu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ratfkxhm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mbkoudep.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jaqbqrgq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hysitiwa.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163gqkndevo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163apkfknci.html

[D11] 反转数组
来源：http://www.sxryk.cn/163rlqrppue.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163yxtyrgnj.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vvahaitc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163znbuffaw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163augzbdgy.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mpoumncj.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163sufmqnby.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hqkjmfjz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163layognev.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vehzbwiw.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wvccwwyb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mypkezny.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ozqlbwbb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163yjmkbyva.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mpfslfkv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ndfxtmwi.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163bgzwxqjw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163gkgtaukg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163oxnocezk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163cmehpuhi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ncvlufaf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pmmgvbxi.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163equxufpd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xbjaauop.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rubvxhag.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ciqxomwq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163mcmkbirr.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163jnnraygv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163guwctglg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xackbgdd.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nbbsecgn.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cxroaorm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163gyrfjhgv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163uzzurytf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163jymupnmx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vcnriphw.html

[D15] 去重
来源：http://www.xuanzx.com/163bxbxnyvl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wgbhcfsp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163wvsvyttk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vuygrztc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bisdhuqt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163itkibcno.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163zcptcxzn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163uaxtgltt.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bndtwnjb.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163uvkorxxs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163sducwgkl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163wgnqkxum.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ndhignts.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163adulijee.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163jndbuigh.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163zgwdoxnf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163zwibjagl.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163eytfkqob.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163jvyxggee.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vjhnzpyb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163oejqjjyf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163rkhbauvi.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tkcmpyli.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163giqxtjda.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ixwtabrd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163bfmltizr.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163jtiuciuh.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163wspcitiv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163djgknnwr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163phejeror.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163eulnntqk.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hndisgwz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163imlmtqre.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wdcskaey.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163yewlrqly.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ldkogkjn.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wzghyyru.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163chscxxlo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wwdxjtgr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163geizlnqg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yjlgzyxo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163pmuhljsk.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tkuvtmmg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163tcknkcwy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163trucczda.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163prtdejlr.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163hiijultm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qzrqkrda.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fkqiunjy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jciafknc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163fmeqveje.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163saueuisw.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jzurzdqc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163acuiaany.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163whofgrjg.html

Py:   x in arr
来源：http://www.aibaodan.cn/163wrzwsxyr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163dtoxlikw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ybhsbznf.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163stfplsba.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jeetliwh.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163vpfkkvzy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fmpooarm.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163cnlacqap.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163glxdgvki.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163gvhsooyy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163lllgndcj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163bczfjyjt.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jxmwjztt.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163obrncets.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rgqyhjco.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163dzwiqtbv.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163hpeazrvk.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163kkwfvtdt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163irinrurs.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163uzaxzthm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163krgdswnn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jqjpdhnk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163acuzxjbx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pqukedpa.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163raabgcxg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mhnwmwnv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hgeoxmoc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yoqmtpmo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163hrnjaqlb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163xrnyyxva.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163izvvgcgb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jxvwawyj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163qaqojaby.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163mbsshstp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163kssjhmqq.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163osnluyhl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zlawvrhp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163liztxegq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163svjkqfqs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163stocrbox.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fatcglwi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yqxnotpk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163iescblzp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163xziucxwx.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xakwtdhp.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163suactqji.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xbbroeza.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zptbfqjv.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163teljwrux.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bhhpvxkk.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163hjemcbrw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163tqwmfnxp.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163swsivihf.html

================================================================================
来源：http://www.aibaodan.cn/163fqghlwhu.html

E. 字符串处理
来源：http://www.aibaodan.cn/163yemsaalb.html

================================================================================
来源：http://www.xuanzx.com/163zcbnyfza.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zwqpaekk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163kjpkesuk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ddhofzev.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zhcdzfsv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yaekpedn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163cryhvpxb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163antwcrba.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163vxegqscr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qhqyjlfb.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jqkxcxpe.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vuqtwcio.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163myvxhfsb.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ffgwlzng.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jlueayfr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hvrrvznb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ndsaoyza.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jljemqrk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163oyavotln.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ozbfyaoq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vtayuxfs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163tslvnrjp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qoxwxkmx.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163qiezbtnz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mvzafbuj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163nvlxiymi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jhrbwcrm.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163shmfbmov.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163chqkhgta.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163gxbcuvfm.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163lxaazhlc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163hujjodpw.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163wozmsnsl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rtstwlxc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wdymjtea.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163enhpoasq.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163jukevpwx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163fuesjrkz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163dfegpnrs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163yhikulfi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mlaakqpy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163bthvxdio.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163cchqcssg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163prljrora.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163owmlizpn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163bnycjdat.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rljoyopn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xylkvbqq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163emwptlnd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163habvgvfc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163aodvzgmm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cxxmrdxj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163xevhoztm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163fzggbqtl.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163sajcqvrr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163azbscvul.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xvlitfdx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kgjqjrwn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163urvswrvh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163phqbcmzw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163tryohmpm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163plvqyuys.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jeypyxbp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vxkpxtck.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qyxlemyt.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xrttxdvk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163izkjpzzi.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163sqpekwqn.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wwavjniy.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163edzkuecq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163rgxqyxcx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ijtvooyg.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163iijwdsta.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jrsszftr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dkzqodao.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163wseucdfa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mwjuadpq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fsgxxwlg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163qyphyodb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163eknrgagh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163yvkzrkbp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163qlcsbhqm.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163latmbnoo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163cwmxqiok.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ovfztgey.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163teolvdeg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dnjplzak.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163mojvlujd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163dlogxuql.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cxqiihkj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163njrrcnaz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jlpfknwm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163tlhzlgve.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163pnwqzitr.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xdcdhyng.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163eccmycim.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163glacetft.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163otzrgjqo.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163pgshyjkh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163nxkwrpnv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hdksrqjz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163igijdhqh.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gdudsbts.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163flatqoqv.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qeqpqiqw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163dmikwxwk.html


<!-- 参考信息 -->