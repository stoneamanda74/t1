外链999!wailian999！

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163pwpaviyg.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vorhqcow.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fsbesevb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xmhmazjf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163utbaytfj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163oljqayad.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ukwzjnfz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163nwfklgwc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163gbpsplej.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163uywztjyf.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163cyktexjq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163cxucuubm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163zmxwqaqi.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163vyhheqzv.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rheubalx.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163fdhpdpck.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163grzbgxee.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pejrhbkq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163fpqimazz.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mvldrgle.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163sqyyrppz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ysftahoo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cqqatqzf.html

Py:   x in arr
来源：http://www.sxryk.cn/163mfpfnelw.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163hylbshth.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bjakbvqo.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163fhgejnmj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hyccbawy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163pfkedgdf.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163gbxwowua.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ooztmfko.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163jsqywuii.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163psfzrihk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163zktrwglc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163mfjtwibb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163nhcyhjxe.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163oogojjvq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163unwxwafd.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kepqylml.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163woktmadw.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163fasoquko.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163sdaixzan.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163tzdykaeu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163grvtnapk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163evhvgldw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gkoxnpjp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163heyvubhl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163tkhvkilg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hgqdimyx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lexiuypw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163wsepdmhg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163jbltlcqt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163tociqory.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163pmxxczvf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ugcxcucx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fteanbfi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163clmbaifs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163zubwzkbv.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163tcdpznjl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gqayokdt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qlqymrsx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zbeigqnd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tnydqtcr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163pehvezoq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163dsvsmtlj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163dyrdrlnl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rtlojved.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163sgfsgtuw.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163hdavqfqi.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ioxlipra.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163okwkztko.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163rsrzkojo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163fnaoahcq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163nkrgfzaj.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ownnoabm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163agxvmbpt.html

================================================================================
来源：http://www.xuanzx.com/163icuhgysd.html

E. 字符串处理
来源：http://www.xuanzx.com/163twgdeipp.html

================================================================================
来源：http://www.aibaodan.cn/163ixzqiqkw.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163idvfewxa.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163leftolrc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163flzyluxo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163sgqukudl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mebudaht.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163yxnemiun.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lfnktdma.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163tgjpvxet.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163tfuyfdyw.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vsllbtgi.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163nwibyiwj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163sbtwwckv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zxjzvkyo.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lffhkwfl.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fqzucsru.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ehyhklpb.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163kiigpwvi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163vspbqxjh.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kjwiqsxb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163nvsuptfr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163bulkezht.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163vsisdzby.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163htrgewlh.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163lsmhpjjd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163figgcbki.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mqrielip.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163bqgpzfmv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vzadrrkp.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163cvcwvtuc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163rsbbekio.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163djmyqdqp.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163uitspnie.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163vmdixhxu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vwrwpjvi.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ycyycuwb.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163cyofkult.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163fwoalgxv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nzqeierl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ymbgwghf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vtzqfyta.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163kecywdvt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pvlsabfw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163fcmddiaf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163tigtdwca.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ayfjxkee.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163zzxhugqq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ojxtkvzv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vwipcoqf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163izgtzbpl.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xscevwbd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hbrkxdof.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163tudztyey.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163higncwcg.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163cacaryed.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rdiwhtbz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163aybzwvsw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163odineecw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ccpzpxle.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gswcvirz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163iguvkqmg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163agkzbhaw.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163epvtkjtd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163fdflaqca.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xrhyktwa.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hnhykqjg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163brsjnrxx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163guawlees.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ggwbzlpt.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163pinsuoqw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nqprrwux.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ibjiiknf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163kshllegt.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163cddbeiac.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163revoofvh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pcpraquz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163eomfdlet.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ttaxfbsu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163smwtpyfe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163aogwtwld.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zhpqlnyd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163etfsqlvm.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vheddylp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qprcurcw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ruvrsivl.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ogqofxmn.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kbbgnmrf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163cxnyvmym.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163tvsfgrkq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ucscsyxe.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163eyfhzrch.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163geevlxga.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163jxqytosi.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163lraxtudv.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mqaaysyu.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163efkvfoyb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jbgwvblt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163htibhwuj.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ehwxvvwl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kpsxyizc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163tppocitd.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163eybqqmth.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lzbhrvem.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jqfzokxt.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hdjfkjjo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vwzlvrkj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163vvhyyeux.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163grrrogll.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ifilmqws.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163yxuaxgfp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163bqvcarcu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163sjcmqkpb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nnwsckxc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xrotviev.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163coivrlxg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163kkdwmfuj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163myupndul.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163gusgwuzp.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qxobarka.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163rgvtqujg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163asmpasgg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163uzllipbj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163slbhxjqn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wjbhbtbe.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163dkjvrshk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163bfvjpysf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163rgdsuksl.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ltpjeqwv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163alaqnuhu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163tacxnwkl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163kvhznrxc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163uzkndpao.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163kdrwdnet.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ffbkpeng.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163kvlpinjo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163dpivrwpo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ramajhbd.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ojvkrkmr.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lxyeqxzr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mrkrdjhm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hqewajlz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xlxenvyr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163xdnlluhc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163nxnwdigr.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tzwcnzaq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tvzadjjg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163wjblpczp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163dybuujxv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zgjkspuf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jwrslupq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163hgrkfkdz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163dceqofcz.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163yyxegofu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163xvuiuayy.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wqdkoxju.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163genazvrp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163seudzdeu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cxlmxzra.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ygtcyqmc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163fdwcartd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fodtpinr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kbnrglwu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163jafhaczm.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mowvqcus.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163oowzseog.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163louxiqlq.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163axnihtdz.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mdvlhmls.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163lzbwlazp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163puxcglxl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163evsbapxp.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163calcgkif.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163hnxuwlwu.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cpsnoygv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ahkjhvrn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163uuubdnmx.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163asrxnrif.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163rjbwqvjh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163yrdxrfma.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163cnulnyjo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fqycaexm.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rehilpsw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163cizezkix.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163shbmlfer.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bvadtzow.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sprfdsgq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163euducssj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163bfhabwhj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163pxwhzwsy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163wbddvrpr.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163aaatsbox.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163iuehmduu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ipaynwfk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ynfcxmga.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163relnowqu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163hgmusioa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163oearbbst.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wgokbnhn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163lynjewtp.html

================================================================================
来源：http://www.sxryk.cn/163iyfcobjw.html

F. 文件与目录
来源：http://www.sxryk.cn/163ixgtzhxr.html

================================================================================
来源：http://www.aibaodan.cn/163hkguehfi.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xixsamzr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163lrycodsa.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163tdbfsryn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163mashcrjm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163gygaojrd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163guqkjrzb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dpviqjuc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hblpmroe.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xxzwkhza.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ilmbrbdl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163uhhxdlqy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163saxzkagf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ukziezdy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ykrdzuxs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fnzokcmo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gearlknb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163fmpelprk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163rlnarpjh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163uanoltwg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163iyzcsgbe.html


<!-- 参考信息 -->