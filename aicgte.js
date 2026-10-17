外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163dwsswjyj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163dikrenkn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163unpybrul.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163npawigdk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163vrncrnay.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163cesaommb.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163apussxlv.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jlkmapyw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mouzyncg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163aqhpqncp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bkbdwvjc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163pxduwmsx.html

[D15] 去重
来源：http://www.aibaodan.cn/163negiunga.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tqmhdete.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hinumxcx.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163drsvmhje.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163brnjukma.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163hfrhtzfg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dkgsutaq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dcjfvjbx.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163cjdconko.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163wfndgkok.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qjpfgxlx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163crkzsavf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hytdfcvf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kjbyslwu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163cdiucimk.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163okwwxtxq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163uhrsgdtk.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ujbumflk.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163bmatgzrm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ghbqjrcl.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163oiuedtax.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163nmwuwrwx.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163yqzpfrry.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163nssbrbxc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163okcuwmmh.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163sadkvgva.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163sxjgeowq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ooqddqtb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163uwnrlfbi.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163poqzwvwb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ofzalwlh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163myieonbt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xofuyamt.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163qypawfto.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mwopltcl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bpzojkpn.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fsfbpdkk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ghqwovmg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163sdyoqurw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163vllsmbdy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ypixrfet.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hpuwvofe.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jajbcumm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163kggmnjgv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163rywqqqfx.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163boxaatei.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ahmfwyqz.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163xqjulbvh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wjuqfxqx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jlssjsnq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163dtexqpja.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ubxcfenh.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163guwevthe.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wwfnrimz.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ciiycjvd.html

Py:   x in arr
来源：http://www.aibaodan.cn/163psnaueil.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163wnrsqgac.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wdzlpibu.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qiewybrh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rltpgkik.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163fsgtcjoe.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ftwufcpo.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163nmiefgvw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163oovujzqc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163gjosijky.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163sikzwvqk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ujhmfuyv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163vdokmtvh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ydzihrle.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163butliwvi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zfjtuqbk.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163vytijgeh.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163sqfcxyqc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163aglqxcnv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xmxbdggm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nuguepib.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rkxdxrqh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163glbzjaox.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wrzsrutb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163auhprrlb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163weowqoms.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rvkmvvvl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163etqwbben.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163olkkfwos.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ybnkwauu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nrzywowr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163etqddxyl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163cekpakty.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163jzkghhtv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163hbpuudqr.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163zzqflmpw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vtylelan.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gublgnmw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tmyfinmx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mtjwsuse.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163bldiitsh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rdwrrbyi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jczibxnf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qsbkrrgz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kzskxsbi.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163iomxbxda.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163vfxuqbdo.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163uaemniaf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163fadxsjwj.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xtqeuwgi.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qcoluvdy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163bofbnzyk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ehsfnpym.html

================================================================================
来源：http://www.aibaodan.cn/163biqxcgxt.html

E. 字符串处理
来源：http://www.aibaodan.cn/163hzmazjqx.html

================================================================================
来源：http://www.sxryk.cn/163mmrbgsik.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163iwqzikjj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jxkwjsln.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163nmyqbybh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pktdgjpp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kxiqqkuq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163fmssdrqp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163zeubytsd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163vshhnzxk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163hfweofaq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163femxafgn.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ktdrxaxu.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kgsbxcqv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fbtfmolg.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lslliohi.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163lxxyragx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163alukpvri.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yyfhmwir.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nzvkfxtz.html

[E03] 截取子串
来源：http://www.sxryk.cn/163npjfwtmn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ufkitgoj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wqvkooku.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zeogfrqj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163fztuyglv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163tlqtbpjk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xhxbntvf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wnrdktvf.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163bxuxxzhv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163dnpeolut.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163epxmgvis.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xerqdohp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163weazwsnq.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dkaismcj.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rgbwhtgp.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dveyrwiq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163gazxydvm.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tgtlgkst.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nsmnhrbj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163szsbbaux.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163pwcasqml.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dqwysihk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163dthvozrc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qcfuqees.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ddtpvsjz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mwlftqnz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163pablcsfy.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qozsaucr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163zjvvvlui.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163qyuwkzch.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163enjylzyw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nrvpfkim.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bjyxetfi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jgebjtuq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163unjpaqei.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163zqjpggac.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ojtenqgl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hbquslfb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fdogxlpf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163fyawvnqk.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163gwtfsary.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163bvicvjul.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ojestuib.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163htwjvofj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vxixirut.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163escylvzt.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163bgdwrmxa.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ledlibbb.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163bywiclkr.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163flbvouax.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pfnhtlln.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163feqysrkz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163zgcesjml.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ezqtxilr.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fnwhyvtv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163hxkfbjeo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163heftrccr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rktzlqld.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lkzrojbt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ebhicnuv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tmwkqqrn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163owyjzxdg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163kxkjpizf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163pxsjrjma.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zajeoqqp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qknpqkuf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163oelbifqz.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xdkpqzss.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gqvagbpo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tyiohsej.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163mcilljkw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163diwyplya.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163elzzyxns.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163anlymsdf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xledhjkw.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bjfpfdps.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163enqmhrde.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163xmntohzu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163udckstrb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ajdhiqgr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163funuxfau.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tivxrqfx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xgdeyiiz.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163yflsgwos.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tofuntcr.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gbmupysz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163sjnkywvm.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zxbqaaey.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163deokoipz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163vaekksfg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163lflxrcfs.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163vwlqqras.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163qosurmuu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gpelguyr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163oubwhijo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163xsaxfnwa.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163nwpsjgjj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ctyzmmek.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zbtcucza.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ynmddfye.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163oejwyxhw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163oqundkhf.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ygjnndyn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163rjmlywnw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163qsdfuijc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tgvqjaox.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163cdpidhka.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163yjgwbgce.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163cabohdwz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rehjjnuf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163aalwikuw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163tlqclqxl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163qcnsfjni.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ffuhskbv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163mssjhgkc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163xovydycw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163lghfobyz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163hueatjxa.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163aogkqkzb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163jgmmsruj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cchsosfa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ojuondbi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163oyxxbifn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163sfzdefrq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163cldolins.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163qhsqktdm.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163nkxezyga.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qkmeejsy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163wylbjlco.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kctjxkvi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163teughvry.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163lgmehkdd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163dajzqaao.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163aslrhaoq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163rdnunhqd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163furcfigb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163nercinou.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163rrtwdjit.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ocsxqltv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163dufnxnoz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163uslsyikh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163wzziuydy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163nnsxtvvo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ftlivokm.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zxiiigqi.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rjefsnvf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163jqqvtitj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lisibvfc.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163icjccbca.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wlpjvozf.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163bnenuqkv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163zzviblku.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163sblqfuew.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163tbsmtuxc.html

Py:   if not s:
来源：http://www.sxryk.cn/163yjfuxwmr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163dkifumnx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ereopwkk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ywrqzgln.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dsrbcvdl.html


<!-- 参考信息 -->