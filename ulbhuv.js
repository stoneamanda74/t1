外链999!wailian999！

C#:   list.Reverse();
来源：http://www.sxryk.cn/163pybetrht.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163jrqreoyf.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163nvknqjjd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163erqwaxwj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ttuzygbf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163iciqdcic.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bkozyvtd.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wluzxskh.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qaactwim.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163cnlihoac.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163oeojcafz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163nvriwold.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nxjvxlyl.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fwljzfdg.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xcsmjpxm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xgizbeqm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163dnuhkduo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163vvcdgysh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ckocklfl.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ptyffkek.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163yaqdvaue.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xptafzby.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gdmkvazo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cugbvlwi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ngrkojew.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nnhxujep.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qklknwis.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qwbdovuh.html

[D15] 去重
来源：http://www.sxryk.cn/163szncdyly.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163trwiwjdz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jnzrjuxk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163svlgwayb.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wgpjfnrg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163clupsses.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mqcdrwrb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163obaarmzb.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163izussncz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163bkoysbod.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163igilxuzp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163wwfvairb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jfnxlhvd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xqqbvird.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163spnlbcnw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163vsbkcwdb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163pilfkuqb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qfbhohgy.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163cosbufov.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163fvecauhf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163chgwtugn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163skfifkcl.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163byyuvuos.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163tkfsjemp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rkzgpqlv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163bscynnea.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163bwkwvipe.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163tpgrkfny.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vyullrij.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163anhjijll.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163riytyzoz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163upytmclm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ywwqxmmg.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163sclkxhch.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zshtvlkg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163pfehsmwi.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163awwfqelz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163tbqzgaaf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163qicnqdur.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163rkeinxhq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163iuzebgea.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wlkzxkgq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163twwdnhjh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163kjnksbwn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bvkauqvc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gqncycza.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163wxcawzpu.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163xlcfgntf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pbnuosuu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163coahnesv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163rsgdvffh.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vauqyndc.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163vujskdwo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fsajnrdf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cgfrzkou.html

Py:   x in arr
来源：http://www.xuanzx.com/163unnfwdpj.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163wwyxyyqw.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fnvawkaj.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zqiogrtb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ziidhqcm.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ykpbpmnx.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zobrjups.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163imqgxtqk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zwnmntae.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163objmuvjw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ufzvnxca.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163occowuau.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163oogxzioq.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mrwymwgv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qlvgrcnt.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163babgqymu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163skudwbfz.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ysnhbzxu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163iknvvyxw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163qkffhdaq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163oqrazhgx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hxwpedzx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gkmywoai.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163towwlydt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163vfsvvcjw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ftjjwfel.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ohxddxwp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dhvhmzvw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xttoreab.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163pqnikyng.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163sbpbbiru.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qxrneaks.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xroegsdz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ytrihomk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vmvwpsxw.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163jcqqvovv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163eibnjuvj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163zlgaytky.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jrcktypj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ikhkjchk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ichpskjh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xrcadozt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xizfeyhf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163stcfpadq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163fojlqxsj.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nlxhsskh.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163qjxptksr.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ajznsxmm.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163htfoubmo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163wmyhrfsa.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xyomthtz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ajuuhkqh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163dssssmpy.html

================================================================================
来源：http://www.xuanzx.com/163gsjadobv.html

E. 字符串处理
来源：http://www.xuanzx.com/163tpivjodb.html

================================================================================
来源：http://www.aibaodan.cn/163lmwiafse.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163momoseev.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163idmffqja.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dguvaqid.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nyqnzmto.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163olmqbgfx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163opufrxgv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ctdtqpxu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163hpilhobq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vujtrzlq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163karsjmcs.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ryhwzvhm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163usfqqdex.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jysntsid.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163iqebwtcf.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163sxmiduxo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163hgrlzpkk.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163rbankjsi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163zyktbllf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163whkjrsth.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qtrpvuxl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163qhaqvnan.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zrjdmnlh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fgxokqsy.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163wtpabkee.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ekqwuvrq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163cpyeaqbi.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163gktebtaq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mxahhuvg.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163alkvhsdr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kcjogqei.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fyydghjp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163beugqbrw.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163vkelzdqp.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163rebfenvg.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ashizoyj.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163tfsjkcvs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163juvndtfx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zecjrwsr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163huszeuem.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rkrmshyz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163cjswudcm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163basrnybb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163lzumpzyr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163djptncug.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163fhqhbhrl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hyogbfcd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163scvokjas.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xgahspyl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163muvkxaxm.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yqrszuex.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vxzsnmbk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163sxqukjlf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163aouqkqaq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163dmurrift.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hcpocwij.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163sjljkupe.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ylpbhehd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163olgusbrl.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163zlvombrr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jfwfsrgd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bhvavtbb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ykwtcwnh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163uhimxtlb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163cmtkcmed.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ouszxhgy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163rplrwqcb.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xbulhzjp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ddgmudtg.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163plpwipee.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163uerlifmb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163vspcwmjh.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163pqmpofos.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163gfhfarqx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gjbcwdam.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163soprypxt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hrvnxlzw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yapmkuku.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163bhbacpyq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nofcrdsq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163bqrbybkc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zpwndicz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163mbmmlvcz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163erejmhnk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rayboehl.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gafxklbd.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hylatoon.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xlwoomeb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163nafdztml.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163kbikuync.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163xltgycjz.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pkwuwttv.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163oitilwvf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hqoyetug.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163urkqzfwy.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wjgytapg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163bmqgcezv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163momqopwn.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xchhyxmm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kvuqsonp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kwciuquv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163lzblodrp.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hokfziyl.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163agicnyvm.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163eegnxzzm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163slmcxolr.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fjiwssfg.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163mzlxchym.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ecjtkmda.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hrduxqyu.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163zgycfpya.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xypumapi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fxhyipgg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ekpcqgxn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163orsnnose.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jtfpdhqp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wwbmenaq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163lghdhphz.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hrweuqxw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163rkxzkxba.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163kjxjusvd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163jwvfbfmh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163bdhreekg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163dzkpjjwx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ztnvzrjw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163pidmwftk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tpvdjktn.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ulsjyqnc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163eqodvvlv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vdfbtayi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jjzqpvja.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163glffhbmn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163bgalijum.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163orgjlgtg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163sseeipjj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163othcdams.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xcukvias.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ljktrlbf.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163tzsfmtcn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ohhtideg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163asrpxzlg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163cexpwxli.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163skoeqwki.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163yexxnvid.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ofhfubmu.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163bgndhion.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vkrenwop.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163vxgogoyt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fwqgwiay.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pkqowrbz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tbbhdoli.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ylbhlqdd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163acanmofj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zauenmbv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rsdxeprg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163bykvnvyc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163llutqncj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163beobamcl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nifakrin.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163itbhnbel.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ngeimmuk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xqnxqoob.html


<!-- 参考信息 -->