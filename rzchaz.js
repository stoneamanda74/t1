外链999!wailian999！

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163niccbosa.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ecsmipkl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163buculizp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ftmulvpc.html

[D15] 去重
来源：http://www.sxryk.cn/163ntvkolkx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qhokeyzs.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163jnfmhidl.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163uezdmbqy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wsqgvltm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163wsaadlow.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163prtifmjm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qgexfrqj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163tzylvhos.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ayginkox.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163imnkwxpl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163tzeznknp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xnyhktfa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tebkvmjv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hhuqwfgn.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163bxitaexn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163kybeknka.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163gmqygmvj.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163dytotzeu.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163tfubsjkx.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163sycfxzgb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ahpvmrlt.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ofcaukox.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xykjfolz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jxoejkys.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163uyhlyvhu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163sizjkewx.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163okqrlyut.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ctjyosqa.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mjfodqgh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163pdfadinb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163kouvfuvd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vsfojszt.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bmhmftnj.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163vtantxas.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163oomzooxm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163egushgns.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163goxbrlon.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163nlzzpyre.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ninfdahj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163blrngqgh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rwwtadoe.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163gmjuujkd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163bpzgdkog.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163vitcnubm.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163dmjbxrab.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163afvcpxvg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ovyyicel.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163shpgcfvr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pompbvbq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163hkqvcwsr.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163nnhbmkxy.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163nuqcftjx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ixdlmebx.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163tstlrnbf.html

Py:   x in arr
来源：http://www.sxryk.cn/163dzvixhkm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163lqidcwjt.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qdfnyowh.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163amzfnxyb.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163hpvhmzyy.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163xwydqqqd.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163kphinqqh.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163savealic.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163lyyfzusn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jvbxxwqj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163uivnlsis.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163umqouwyx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163imfdfjtx.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163amlvgrdr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gzsrpcgv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163edlycsgc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rqhtzgfr.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vrcjuicb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163afxnalkz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163eqfxqumu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163drjvbeik.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163omyzfmlh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ibpwpeye.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163omnqxjzr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163nukgmqcg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163erbtcynq.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jmbnooyt.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vdcrgmci.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163bwfgmvoo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163xwjcjwzt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fsjrshvk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tfyqdrkc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ycnnoygb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163espsmano.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163lmqfnlrn.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qukejyba.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163piduzcpx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163hjkecozb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163hmoaophi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163einfmbjh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163wuzlvhma.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xmjvegiv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qhmwtoro.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163prtooxuj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163xmfdxycq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163gwyqeuam.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163wgqkhroq.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163whriiqrm.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163bhveuixj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163jxnlfbkd.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ujcxeakz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163qabeyllq.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163nznzcbjd.html

================================================================================
来源：http://www.aibaodan.cn/163eylvfxyc.html

E. 字符串处理
来源：http://www.xuanzx.com/163fbgirnkh.html

================================================================================
来源：http://www.aibaodan.cn/163cawfluib.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163utqxgnls.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163wmecguwi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163cjetunne.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qrhxxhxz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ehamnoij.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ioezqwsl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163wbxrcktv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163avjvjnua.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vbtzoyfe.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163cyfhrica.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163mdgkkwkh.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163lwgttepv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ynsbkjua.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mfyttscr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163yhzuoovy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163owkifyxo.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163goltoqfq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163xdyonude.html

[E03] 截取子串
来源：http://www.xuanzx.com/163fdukbhlg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163gmfadfam.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mxvfutjb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ftgabcmy.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xmlojdew.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zfzjclrh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163twgpoijo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ljhztehm.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163osvgdnia.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ausdserz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163etxjzapa.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ibagphbj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fpugwygw.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zidkrowe.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rclueiti.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wtlravvh.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163emmikoag.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hyhtufqr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wktqtmhd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163prbxmvnm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163krtbzbqs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gswskbps.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163pzzrkrkx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yndvqkfi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rnkrxhqi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163utzlqcmf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163lkazbdhs.html

[E06] 替换子串
来源：http://www.sxryk.cn/163dxyjhmpb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163sshlvrwd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163bcfpxpzq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163snrmujyw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wrlrutjy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xzhapssw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ssjpxfiw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163erlholqm.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163grymfieb.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163pmfuetby.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cirhmlau.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163bgefftrs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jalxxtzm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163srsxswts.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163mrhtntay.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ulkmgpsl.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kjpzfmke.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jjzaykfw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ullqvrhq.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163plxnshun.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163zuumknwj.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hapbqogz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nfeuvydt.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zbiexitt.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bxdtkfzn.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ieidtoct.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163dotjgehw.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jrgkqudw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163qvcttmry.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163zwrsbfys.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kzxvohay.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163exzyfnss.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163dafrwiyl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163bkewkwbf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zveqqlbk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163nutfwipv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163sofjufsp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163btxsvyae.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163lmxndrih.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mlokyvrn.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ufwnazxe.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tpacnacp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163pbkkuntk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wwtwwwws.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163mctudocg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163tyinmcgc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dsyytmmx.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qozxvwks.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163grwsqugu.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163iqfcobny.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163zgjtkkwf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qaxmucyz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163hcxacrlp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jcnugubc.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ydtznrys.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163bevewivg.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163nrdewsgs.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163naheoqur.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kafwsauc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vxuqmydz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ujgckygs.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mqcnjajk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163upolkewx.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nntfpkhr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163pwbykqci.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jptwwmfx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163cdszmysx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ysvxcghr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163dxaqtpff.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163dcyuybeo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163iosztxwk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163cxnfksfh.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vfxkimlf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163sfelfgtu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163hnwlidrh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163zehrhrpu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ysahkcqo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mypsrnaq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ayochzeq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163jwaikpcj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163daabxkaz.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qmzjbpqv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163qtlznznl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163snbiybxo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ssgykgch.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dmrkiaci.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163miexytrf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zseczpyu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ygohkysm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163yhppfneg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163hsmowech.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163feftfuvp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vpcgkduq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nbbusplc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ehkiuwqz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163fnpteqef.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zyrsrfpa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ikhkloit.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ixzdqndn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163huuzotos.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xymyijvw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163twfbmapu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lwljmqhp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163riikwhpl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163lxskxfhc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163keuvxdgy.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dnjbceru.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163rddmajfr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163pmlszqdv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wobpprgp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xpolubzz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pmwhejbx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hgbvnuwf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163dwnjwzwn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zycxkodw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163nltnuafy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163xeprvuzl.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163dmejhvmm.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ezwnjuzk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163yvhjfdhc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kvgiodyy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163clyumvho.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163mrkhurqa.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xbqutxlt.html

Ruby: s.lines
来源：http://www.xuanzx.com/163szqmfxoz.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ojvatgig.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163wvtbawtp.html

Py:   if not s:
来源：http://www.sxryk.cn/163tynaefyq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hbsllxub.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jblhkszm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tthulquc.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lsgsqlmh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hfyjmxny.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163zkvliqgp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163grtfgnkd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163dyzacaty.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163hsolzurh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mvqmeafv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wbnabhzj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163grwsmftb.html


<!-- 参考信息 -->