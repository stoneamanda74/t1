外链999!wailian999！

[D15] 去重
来源：http://www.sxryk.cn/163wsafpvat.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uajlsxrg.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ioqklsmt.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163opjsxsgq.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mlanisom.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163bkdfzknj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163avqgyswf.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163fhyryhpl.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163myylrsqd.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vwdvvvjj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163rgzgtelv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163qlbdszmg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163efkyqqji.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nghjmlgy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ekxsiqvn.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163farzbekn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163eglvezfj.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qwznwmzf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163velqzuxt.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qlpxmqun.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zvmjikob.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163shwgnpiv.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163vedjrbjb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163lpoqmyte.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rbbzsigx.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163gbdrztkd.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163bnimgvia.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lajxlfrz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163xxbearus.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163qalhymiq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wnvrxgoj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zeeyucqe.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163nlbytxel.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163iellkhdu.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zjjdqmed.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xklegafq.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ozxfxeax.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163omdkuruj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163yhitwegr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163nxyupadh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jacenuqv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163znftkuck.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163tlezreop.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163isxqzwlg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163asqstnke.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163mnoqnazd.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163wjvixrjf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163rwugmeqk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nulzakvz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aegoyyki.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163exyccxfn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gyqycjkm.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qxhidyxb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jaccagmv.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163psbfnchu.html

Py:   x in arr
来源：http://www.sxryk.cn/163bpxbhajf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163kbdzphcl.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rvvuddtu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163joxntatx.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tuzvzofh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hupjaxck.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mzknwqbv.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163shenxoet.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gqershtb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163efbxowup.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163glnussmk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ijhgrgqo.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gieaplan.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163kwkhsuce.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163lwfnviyh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163mzwarsud.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nlcsjqxv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163qebtzxds.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163jduvweht.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163vhfzguzb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kefqgzpx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vplmhlwx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163lhnfcmoc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zurmqtkg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ymuyjuov.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163qlqahdrq.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hrmipmvz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163uvaktsgu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163okcvkvlf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163nhukverh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ooykqtgj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163kbkebdba.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163szhtzarq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163pvpouefn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163amrycxxx.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ivlxvzvd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163htgmdjga.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163psfszgfh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163mjfppvqm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163cdveebln.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163opxwuhep.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163jkyssicb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163mqqcchpz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163borbrpdf.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163vthhubib.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ailkivyv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dqgyozfe.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ozdasdma.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rakhpzfa.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163imncpdho.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ikolohua.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163bvkawfqb.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163qtwfoaer.html

================================================================================
来源：http://www.aibaodan.cn/163jztjojbz.html

E. 字符串处理
来源：http://www.sxryk.cn/163ivpwfeqi.html

================================================================================
来源：http://www.aibaodan.cn/163srtzvtnw.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163rzlehvei.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163atiypbjg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163swbqngpa.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163oqffjjyn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ddimvnmv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cgtbfptf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163cvsdbgfz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163bejvbdvs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163nmrhgtfu.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pqsagcls.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ziosrjcx.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gyvfgfev.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uscxzqcx.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tykrhdqw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163nbdvoeod.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163sffamdrr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163vsnwrjsz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163vzzygdns.html

[E03] 截取子串
来源：http://www.xuanzx.com/163sryxjbvn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xppdvzts.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ymiqnrsv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163obkqgzay.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163myoidozd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ioxhudfl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vrlayfvk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163dqttdzww.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163eysghiaz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163xhzfpeqd.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pdvlhefr.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163srobaxtq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hewmmwjk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xvdxrhdc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163dasgczfz.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ivdexfdf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163gzpykbep.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163desqngtr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nnxvzwzs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163gqsnwzpx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163anbgmdfy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163twtmuzfg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zghxlrul.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gliyzuwp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163loietbdd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ydotvbvp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163fnzeqbaw.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163bdwulbky.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163bdddugmk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163fbwwephj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qfyhrjul.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163orptxeup.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163srfjdfhk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163cmguamqz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163nibsrhff.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163aypxfucr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163cesyrdzs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163htdyhxbb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qxqmhtfw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jdhoiapk.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hpitnzrr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jaccvecm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ssqjhtqk.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xsbntcxw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ojbzlwpm.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163rmppdbrd.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tomwmqtg.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163viqxhbuo.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mksdmntk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163yozcpnpf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163bfliwjjf.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163exsmkwmj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163gghgovqq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163yfxcqphr.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jizerolt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163makmowla.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kzmhsygn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zicsgngf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jhrlvkgs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163plfvjkfw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xncjawhe.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jthuvout.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163hlzxeiie.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163kyiopbvl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zhkmuida.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163drawrjdr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fdfxnprm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mhsybipz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163acjvzvcy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ushxsunq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163pyyhdxex.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163bjpdyupz.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163rbvsqojs.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163hnjmknbl.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163migkziip.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pevcqvqq.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163djvwuewg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163aptkhucl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163snerfzew.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qwkbfhjw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dvjevpjd.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163tpbhfnxe.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163jvrjoxym.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163bwkqdrqa.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fuhurigj.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bdlsykzu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ldzvourk.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163efdfhgtx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wixyydqs.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163alpywipy.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jmedxsql.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163bmtchvmh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163lvrnsrry.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bgqczabf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jllgqkek.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fencgshv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163pbauzoze.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163gawqixin.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163brzuahnx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163fesdtgzt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163njpvsvlb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ayugiggn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163rwrqhifd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163pewtmadp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ajaxtwyh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ctuqenuy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163btcviexl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163hfxqyylj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fakavsqj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163mtylbakp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163oijxewsn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163wttcuefr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163tqkxrlnj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163grwyoiwg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163gcomystb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mrynlglv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rnmewukv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163eltfcpaa.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qtjwdmfs.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163novedile.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163riybeycp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ltonepwv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qezvxruz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163mplinndr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163dxqerbci.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163admuvhvg.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163nevyjlxs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163sbuxuyfq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163vtjqetun.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sobqfcwv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163csvdajhf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ozwyobyj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163wyqksmzn.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163mygyugtn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pjplbqwb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rbmhnzyo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163acmxrnyt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jjnxalxv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163danfbxvm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wzieresg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163emvfrxaa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qhruapjx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163zgimvhnf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163dwvudnrn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163trwusgyc.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163citggbcr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vkuiedjv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dwatoekb.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tbnyvezs.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wqejewpn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163mbsbygmz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163digutvzs.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163iirmyxkr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hiebqrkl.html

Py:   if not s:
来源：http://www.xuanzx.com/163wxwqrynd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163mqdlmkvv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lwkmbduv.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163lvcblgfh.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qfcayjcl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163wqqikxjy.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xdklovyj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163zzhpkwbr.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163jokfpxnd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jrhbtpqu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163bfyudssq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zovshdte.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uoutgmsg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zgxddgha.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lqlkydqn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163bmadmmor.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ozkhgabq.html


<!-- 参考信息 -->