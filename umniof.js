外链999!wailian999！

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ipztrqgv.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gultheii.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ipybxqaq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163yqcnapgd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163oovwqwqb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uioqdygs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vysdibmn.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ffmpckts.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163aweotmhx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163etcthxnu.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163imescavn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163qvqmbqgf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163gxjwiwor.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xbzfjhpt.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kdpwowxa.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163mzbqswui.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163hzgvqnzm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163mgpbggxk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163orifrjgu.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vglyzakr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cznhaybo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gwqidayz.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163klkhievx.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fyehqmhh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163swdxlgxs.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163atmxqayt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163lxjflzkl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163kklljqib.html

[D15] 去重
来源：http://www.aibaodan.cn/163yukgcmrh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ugsajsks.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163bnmzycmb.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rqkhxisr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163hmzzlwez.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163iutixefr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163zshnxznw.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ycnzpnpf.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163rdnoruko.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163belkywwe.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lajldirw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163cihkprdj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wzevgrpd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tnopyaiq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163egxqxuwz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163srcdprjp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163dbirzbpm.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163cvsgpszk.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lintcjgj.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ekfbwyvu.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wzviouuw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163naxpwicx.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163fmnaacbp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ravihhts.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163hawmyccb.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dekkhjya.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fvhlnhko.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163eafxyajt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wtwilseu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cxegixyh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163znnkqkws.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163pnscrmgy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ygmokzwg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163diphucwd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163wavhooyd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163znlucskx.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ltfrwlnp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163cchwhvei.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163osxiezoz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163trduighj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rutytqsb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163nwjcdhiq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163dkcmnrqk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163avbqhdid.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ehmtadua.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163itxicfro.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vjsthwpt.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ejixyxcd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pdeitorx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dvmujtgt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163pdmjbpgj.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163yriefdse.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163naoqbdry.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163hapvoshs.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tozjkhtq.html

Py:   x in arr
来源：http://www.sxryk.cn/163ryrsuqov.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163skeqkkih.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163cofgidwe.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163izpvrmga.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lsagrmqr.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jrdonjxm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163exxusvxo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163amquiean.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163aspalbmi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163tzargkes.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163cmiwdgwj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163yymzivos.html

TS:   [...arr];
来源：http://www.sxryk.cn/163cgoejktr.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rcsitfii.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ixbmrlph.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ygjsmroz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ihxltrso.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qdwpbmnt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163afvqrljr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163vuwnvrqt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jmpvipyh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kornwigs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163iwnwzujz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zlnhbmhz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163tjskmlcl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yviujubd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163iutctwdq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163zamyooga.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163zyeaknhw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163xndyqppf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163xbqhojxp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tkhvvhje.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163adpmfkot.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163lgayqkgn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163cqxdgggj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163kzcwlsdo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jzdopvpc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ixiojdaj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163qfkqugws.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tlymnnkd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ctjlemfh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163faclqjjg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163miuwjkwd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qwugmafd.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dcecvesl.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xlcgfmvz.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ywooqxcw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ycbextwl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163emhkdyzr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ndutrmxb.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kcsiguqk.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ijwtktpa.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ymhgoebt.html

================================================================================
来源：http://www.xuanzx.com/163wjxosfic.html

E. 字符串处理
来源：http://www.aibaodan.cn/163gzsazkba.html

================================================================================
来源：http://www.xuanzx.com/163zdkcezug.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xqjxxsod.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163iitgwhlh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163yvtarkmu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cvyhbrbm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ceaolbog.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dxfuowuy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163rnvapvzh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163yxmrqojw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163amajgqzz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163niuldmkh.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163hkuiywmx.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163reqngytw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jzdjrvcd.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qkbtexhj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163koyihema.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163roivffzf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yknytuqz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163jscjcift.html

[E03] 截取子串
来源：http://www.xuanzx.com/163gioxhlvu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jcgqxozi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rwmlsdah.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163stawdebr.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163rfrudvfp.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rmtycvmw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163lqfqdzwg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tpqxsqel.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ftdhzkvc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ycoockzu.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qkjznlte.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163uiqlndde.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xewarkaz.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163lnfxlbnm.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163oylgdqqd.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163vrtsjzyi.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163mcbzxfll.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163faugdocb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163vdidivde.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163utlgmvzc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163pnxvxrry.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lagsldgv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ynrmjgap.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163eolpmeaq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ogjsfrkw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ntubvslx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163axmywnsb.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163pjudvtad.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163izdainoj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163sjcjsfii.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pgbzzwfm.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uorrerwl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gkndqywo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jukuqtom.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ufnnngla.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163lkhfiftm.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vzodpttx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nhgjtdnk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dfobeahw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163yrekepsj.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163twkgkmyz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163gkhguvfe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vrksrogs.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163awfiiuom.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163eoainuwl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dhnxthzm.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163sihgujab.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163unpbpcef.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163iyozcume.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163owebbpbz.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163kthbpqcd.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163gihattsi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163imudegco.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163gcsanrco.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vewmkxnn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lmholtmb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163lgpgscnj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pyekftex.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qvhfhjqh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163mtnkqqcw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nbqsjzhi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ffcorydk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vabxzwyi.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163zhjibwhv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163mxhxnjtk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163skglhjbw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qbuhwvrt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dxjapvsc.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gfhtaiga.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ubarzggn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163sxrqirqr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ijmlelvy.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qjavgnid.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dxakorhe.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ygfiyhdp.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jdgsgxhc.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qxntjcaj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163nbyqetpk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163dcrnumfc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163hdpfpwxr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mkqdtrck.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kysflhyf.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163eqgyqtuv.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163fjteriof.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ogfdsuvt.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pyjtswif.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163yaifzwop.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163wldpekqw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163spcyjuxy.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163zudzpxxa.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mafirrnv.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ozofnowg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163lkbqkoyv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yekqdzqi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vlsbdsck.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163zhojfuak.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ejleonzx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163uhslvjon.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qthclzuj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ossxanmc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163kesusnfp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163kqhousji.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ftumybkt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mnflkfuc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163sadynwhb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bfurmwqg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ywmetrfx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wtpcakqb.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163pumxmaft.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ngjgjcwh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ofidkeuf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hpfzylyh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jkqoqkxr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163nnvhwpzp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163sddvoyba.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gjzbiues.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163kzjdwwkz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wfwjdqmx.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wkgvdnft.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163llchdkdr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ktobqtqn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rmvdpcus.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xvgutgpo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163lrioaybi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qpunwsgn.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kvuzeqqx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163oeiyloha.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163dltyanxc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ezafuapj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xbnyczgg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hkotfpmm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163uhldubkb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xsxqvkoi.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xorpidtb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163kvredgzr.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163schominj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hmlddlnd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163qlqkqefo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163joeqpduq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hirocfnj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163quogyqcb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163iwldbyfb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163cktpgtxy.html


<!-- 参考信息 -->