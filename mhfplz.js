外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163pcfboace.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fswhlxqq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xksnacwu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ltwwlsss.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ucsaxvup.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163eulxqdgn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163pfwblupy.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163lytadnvl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163jcmbfilf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163lmgsbbqe.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bgjjzbys.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163oegzjakj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163bbkiijfm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qqwftlri.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163dgjwrbfi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vtefjisx.html

[D15] 去重
来源：http://www.xuanzx.com/163sdtmmrsr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tirjenvx.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ehnbknck.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zdpwutbc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dyzixlgy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163efgaullk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163bzcvgmuy.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bpvbgpgy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xlqhjiqo.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163asjaaruy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163hyihjupo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163xwhlcxuj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yysihqtg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rsnfibjd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ncqsomoe.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163hjmmkmej.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163aojprdas.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163kcqvsijm.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163dlopzyzk.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163betasrak.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163swccgdro.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tlbraqdo.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tbtwzcvc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163cmeyznsc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gidoyluw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163gkwcxpur.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163niriauxe.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qajqijtu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163zngoijec.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163akrogieo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163hkbihyfh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163tlgegdux.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ecatobgp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163lussevba.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163dpvtfnti.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dmuoqkmi.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hipkeqft.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163nkgysbes.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163gsdrdqcg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qnwuyvft.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163vigopymx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fleredmi.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163aaummsdf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ttnvmbij.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lakhzasj.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163azoquzud.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ftkpqztu.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163bxkgxdeb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ltfnkray.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fnavdflo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163mswdcnjf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xpelqvop.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163wcmludyy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ncvtbsva.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tvwzqvbu.html

Py:   x in arr
来源：http://www.sxryk.cn/163mpqdwmlp.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163uinnimtv.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163stfvteeb.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rxiciggs.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163jpczuycn.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jxnvuvzh.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163dngxtadp.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zwdszbeh.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163yxzxtlcr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163mftkalgk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163hostnnju.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vpureghh.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163obsdihhf.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ufatgmfk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ndmpivay.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163oczbdutc.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163llywczrk.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163wavxnfxk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yzfjcnhg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wwsrmlan.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ojpwlhij.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fuvbnusf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163kzkdnbad.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fyshqbel.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163icesvfxv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tnbfpowa.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163gdkyahjx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ddxtjqgb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kqamnupx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163alerrjro.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163xgjfpiku.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hfcipmdh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163zdwgfgjz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163uyohlfov.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163bvzyezax.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163jpbddqkv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dldpahry.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163igzzyhpe.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zyjrnqex.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163aqejmqrl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163sjlhdzwe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163mjyxvajv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163sizhvcqr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163buyvjibt.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163kavchoio.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ujtirbgh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ngorczzc.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nralixtd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ejbwayjk.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bttbugqm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163emeyxkoi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163sgwwqcav.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163aoepfevv.html

================================================================================
来源：http://www.sxryk.cn/163yfxjnijw.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ntdjetbp.html

================================================================================
来源：http://www.sxryk.cn/163rjiwkkhl.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kbrxnufm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dnfxdkic.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ovvgamvs.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163helpwrpv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ywdigyhv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gwnrueeg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163kenkcovu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163jqurclxc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163uzrujdgm.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163fgfetpym.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163hlxazazp.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163wlxgzube.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163sikrmoac.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ypyklaib.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gcyjyeng.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163egccdzqy.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vosfvkbc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163igdkacqm.html

[E03] 截取子串
来源：http://www.sxryk.cn/163qisdvkqs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163pjvvlvkf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163sbktzwsf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163xjshgnfb.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bmfurchp.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163cxsjvuer.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163pdrhsaqj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163yowiogzn.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pbzkiqps.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163kvmcxvgc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ncdvvohz.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kujzeldk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163wdfeoroe.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163bxfadcka.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163klcqxnau.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163mferficb.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163fmoazbfv.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163gjzjaedx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xfyczqmb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163uvkezskf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163rrybiqyu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gqpposex.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163giehdrrz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zdjrihtq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rkqojrio.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163wnytgrmp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163bnhiweyb.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kjqurpwo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wjumydub.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163viecnalg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pcfymmcu.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ipmsxrbf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ghitnyzw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vxvwsvhy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163rinqbnor.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163xmovzhqc.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zhxqqepv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163dybajtol.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163cpnjxcaa.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ntnhdras.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163rypqmksg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163nlgajjvs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163luowmezg.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bueveqgp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dsivibil.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ycvseolp.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163frwmixvb.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163chjcbvkk.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gkmrzium.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163bklcpmte.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163lvrpjrkr.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163oorycqqt.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163yntsxieb.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163irywbtxf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ixpcpvxk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163cjyixifg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163bdoncbud.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pumrluyo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163twmxwhot.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163evnougqp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163rzcepsuf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163refpdfvx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163vkleoiku.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wscmnofu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163asocegjw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163pdscbkxf.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mqgagdlq.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yuhditwi.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zhfxgnew.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ikpqvndz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hlvdhitt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fsnpurkb.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ntnjojym.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163bkfsagki.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163mwhdnjkw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dycixnau.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163higtrpez.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163utnymzyt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163llxzqdsv.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163puamxoqv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dtxmzchm.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163hiomfnqx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hecfffeu.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163tpbhjcpa.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163sfnkrwbm.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qtodbnco.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jqywcboe.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ifndqtfo.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zqbrbcvh.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163isdargzt.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163esaysxpp.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163tbomibnk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wcnzerfu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vqbvvpua.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163sotfnplg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163dirihkff.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vvnercpk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163hsyrlbkl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163icjlwowy.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163typgnhnh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rnssajta.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163njxadrrq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kvpaossh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vmdicalc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163gxztasfx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163tibfxpvg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163fpyjynvn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163udjtjrrm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163uckdtesw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163kxorzukj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qaytcada.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163pgledccf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163awlytmic.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163harquksk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163nbooqjdy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bcexuuau.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163uvlaiwfi.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163pxdrxenz.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ofmrsyli.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163euzwvvkk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ulbkybgi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cutcobqe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qdfqspdt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163elgdlafo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163aypajrgv.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tfjaajay.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163owddjkih.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163lkoysokt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163etijdior.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zegcxtaf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wfyhtdmf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ilapyezw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163qqxwbofp.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163aqetfsyf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dxgnwwdm.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163kihklbxc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163fqlaabti.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163rahjruzi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sgfnnohh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163evphwjeb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163zvgvpjcj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vygkrmly.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163roopbkir.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163lhydkzkq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163sjlerxhp.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163bxlzdpyv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ktvqdotb.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ednowbta.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pentvoer.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gkrevjor.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vqzjnhbs.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nxkmnfmt.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dhsvhpno.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163gqcmpppo.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cqlrthlc.html


<!-- 参考信息 -->