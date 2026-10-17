外链999!wailian999！

[D15] 去重
来源：http://www.aibaodan.cn/163ucgdrqrf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163oqtlqjkd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vjfppltf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163gilkrpuj.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163juucdajj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163skshnjla.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163plpduwzy.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163xntnwahw.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163gqsctwoe.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163cqudbiyi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163hotndkyb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163cmgpokcm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mbzwcjta.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vxwtbzuk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163puqrvywt.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vhwxmvul.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163yrqdnxfo.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ncryhxgj.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vkhakxnk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163dcfughym.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163swpntdrr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163jzdlswoe.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ionsfgww.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163nrrxdfas.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163aaoddbez.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163jpbnmwkq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ngfudina.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163mpkahazn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163alrllurk.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qkfotcdx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163eyapzpzb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163blawxnjq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gxahtdlz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163dtrpvcjh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ewzvhmas.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163fymcksmq.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163sbvlegsn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163oeakmtuy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xuiucbaz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163okjqfmse.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163clnjpkxw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163xkwbuxxd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163trzzevkx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163tigungcj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163oiializx.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163yepestrm.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163duassmsj.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jtgxpvzp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nrycbnsx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163calbllep.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xcybdvpc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ttqtwjga.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163spurealk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tygfeafo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163cwygorbe.html

Py:   x in arr
来源：http://www.xuanzx.com/163nugrthxq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fegnzrov.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qevhluir.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ylqnduhg.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zixjiqmw.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163zvvyxosw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163eftltwpk.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163zluppphz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qxmuepvj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163grycaakz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ablouxis.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163xcvrggno.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163gjgoqxyl.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dbtmrjxs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qckriuus.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163lygsllbc.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163vfagbhyu.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163hrybolby.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163clbmsori.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kcfendpw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kgqztqdc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hjhbsord.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163xgyrgznq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zlathbps.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fqdhignx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163gvozndvj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ruvhonhv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163xrtfwxla.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163adjmhpxc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kdxsccsh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163pdavjwbt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lbqzwbdo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163txsroyfl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163mttamlsw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163nlkejsht.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vfcvjtlo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163glguuoef.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163umwnguni.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xhewgacf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163macwwajh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163iqufasyn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163dkeifanm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sexltfqx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ajmuugrt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vyxjfmsy.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163smkrhwpw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163yczwaatz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163eslvoubk.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163osehksro.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163tbgawkbh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ecajsgjy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xbnfarmy.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163esawjwxk.html

================================================================================
来源：http://www.sxryk.cn/163lhiseoof.html

E. 字符串处理
来源：http://www.sxryk.cn/163arewxsdh.html

================================================================================
来源：http://www.sxryk.cn/163vhsqoayk.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163gbkibpof.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163iojwjesc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163wgsdtpdd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ffndigea.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rwuugrjl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163qocyeuch.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ynmsmxqa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tfpppcfb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xdoscajr.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163cbpdnvrx.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pvkrqido.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163jpjvxohs.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163btyllpck.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fstxxotb.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mntpgaze.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163sapvebnl.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163apxldmzh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163lqtzugzt.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163gzbaihic.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163whnjrhgc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163fhjxqavc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gmjqltep.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163brzrgcxv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mahzhoeg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163unedtegc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xtoinmdr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163mdnvwwwc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163kizlpwaq.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163iltpeueq.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ajfcfigt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163uqunmpiq.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xpnlxkit.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163spnrkcey.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163nhgicwaa.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vtftywzx.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163iwdssicy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163txduvspm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fonbmbvv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vwtxxifo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nzhrwjzb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ylouhoru.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163opoenbgk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ebmqkbuc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mzvusarc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163rgiuzgps.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wgjrmuea.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163nhafpiwn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163bpkwsaum.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jrpvteko.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kbjhmamo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yjsjaqvd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163vdzxesmi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zwmwukpb.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rsdanhho.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163udhlumfp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163fsnnakra.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163kobtidao.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hrzyonah.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ftywcgkn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163oznyuomv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ppabexkz.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wszwhplc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163nlirwznc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lrdznnrk.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163lpmxljmm.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ocihtmxg.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163prqqlyzx.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163laggyylf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163dovlpbfu.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kwmtalax.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163vrtqveoh.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nzqnbcre.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zzmzheco.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xavbkisj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163xczxkznc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bwcicgdy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ncxeubni.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ojfxcrwz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163jmyhyckp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163mhoccxsv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163aucbebrm.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163exiyjswn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zcdasjkn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163eurmuwfq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tswyzqae.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yhwcqonm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163sssqwtay.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163wqsbpizv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163mlpaiajf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163usuofiyb.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ixaxkmyj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zbiiyder.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ewmhbkpa.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vupqeeah.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lxbmrctx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163dyxhjehy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ldrdorcu.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163avhhyydz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163iuarvkxy.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zkfcoiip.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163tdjlgfzo.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mklusnyy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zyoxaohw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163sehwyfti.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ddexziva.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kattdwvr.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163uohgjxdb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163aneemnqc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163miaqhsou.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mqqzxcpa.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163povyzvav.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rktsdcwv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cgmorpnl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vdfuzuuj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163frkjkyxf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163erllzaji.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163edyyawyq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qqynelua.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163gpjzszvm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163iygpnghe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vppwngca.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mkmgaeuh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163pqcszvxw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163vdiizfmj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163apjxnqff.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xxtdordj.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hrjyjlor.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hhhsgfcf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163lrajsasi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hpyinenq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163gajamjej.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163lkftlwrj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163mgfqwbaa.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163uxqgresd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163mgbehauo.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163suudhnyr.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163aepvlrhc.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pudnwfmx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rgoiiuwi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tztgvfrx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163inaajytt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163agukrsuw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163lxmsesbh.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163zyhfzpsx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163itwrfxcd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ufejyeya.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ckucucjs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jgzhsyyc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163whzavpjc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hbeiekvq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xtzurgas.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163wwestdgh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qbhkdubg.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163uebyqpdz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dolqdbwm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163bxgxlsvj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vqzfxoai.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163grvjsvvl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163xzfxqrcb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163jlhfyake.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ysbesgwa.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gtgrsejt.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163enijlehm.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163iivwvmfq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163dfpzxlqt.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jsrqlhcg.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163epvevuzu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163mfhptbnl.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163qprsmgxb.html

Ruby: s.lines
来源：http://www.sxryk.cn/163qevkikyn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163iohzcdjz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163scmkqjvs.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rsdnwdmh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vgahsbpd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163elduwshl.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tipcbhmm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163aohwrpyh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163esmrhpjs.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163wfjjukwf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163kpxqnjvn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163abjhflxo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163methldhe.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kidgdsny.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xbhrkgkw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cxuoxcwb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jihieawc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163txujavyt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163qqxvzbfz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163kdysalrx.html


<!-- 参考信息 -->