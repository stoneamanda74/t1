外链999!wailian999！

[D19] 按字段分组
来源：http://www.sxryk.cn/163ozjuldeo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ijnbhbzd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163reqedezi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ghftjlon.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wgucyfmi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163scugeeue.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163dmqbdldu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ryxliebq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163vtcjojum.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jutfcujt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163wwhggfkm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tnqlbwkq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163olgxzebt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jdanzskl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163eeseindg.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163moaetmjm.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163audoeqgl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ntllxjut.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zpmdowik.html

Py:   x in arr
来源：http://www.sxryk.cn/163bekdliyw.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ocumvhvm.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ykmfalzq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163fdlcbjek.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163retbhtow.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163eewzazlb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163svptsoud.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163neuuepdz.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ijydbbgv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163dbjwdzai.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163krzzjsar.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163fnpsbhea.html

TS:   [...arr];
来源：http://www.sxryk.cn/163iivbuivs.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163pwwbgzzh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163unreixla.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163feyfrhjh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hnxspxkn.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163givwodze.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zilegbxn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163idrycsws.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dfzucmvi.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pjdpwznb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163hdusupnw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163oetelmxc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163efgvgoxl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zvplzesn.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163iyksfqsd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163pcnlyzsd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163yxztmhwe.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kzobxlcl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163yhwtlvcj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ytlsvblv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163etignkor.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163dqxrxeru.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163yvmakmeo.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uekhdwzg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xwcrbspz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qjykirrk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163zswckxun.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163edmnheec.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vtrqamrb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163vxswncxq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163nyquavxg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ytrpgweh.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ezpxjren.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163oricrtbp.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163bjlzhdlg.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zazhynwj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163bxxhsjyh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163myuryrhg.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vllkukxd.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163jbjbumta.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163stvpntxx.html

================================================================================
来源：http://www.aibaodan.cn/163pfjxmiwo.html

E. 字符串处理
来源：http://www.aibaodan.cn/163mysxzubw.html

================================================================================
来源：http://www.sxryk.cn/163rvhpwytn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163fyqxbbfb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wcwocoan.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jfrtibit.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163imrilukc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163octzefpm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163yirabfra.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ivdnggyp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hetonxzj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ruifeqny.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163lwrrxbna.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163axizgkds.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163mkkdcmta.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163frmbpsxv.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vakbdoqv.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fehrmozu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nzqhsxir.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163mlaebpht.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163cshlmttp.html

[E03] 截取子串
来源：http://www.xuanzx.com/163pjzpmrvg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163bkbxymad.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163lvkdryrj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zigxmruh.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kctzvcpn.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163pfsrijwu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jhtmfxoy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163oapbkvnb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163weuugxsy.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ubffspwr.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163nciiurey.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rjwlyjhn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163yiiukotq.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163nhsbmitk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163kwmautki.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163pxsaomjw.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163sqwoucfz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pormusnq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hcgnlouv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163hasoytaa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xkrrgusm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mkewlclr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163mwnoynzo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ykcgdiod.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163oyrjwtex.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163segrbuiw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163yzcltkbk.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wpffhcuh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163mjccsvza.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163iuhzaeog.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ladqrpak.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ajxlzvhy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dksoxotw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163cndqglfl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163tsopufvn.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163etfgqyoj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163twusvpkg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ucvoqvsg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163sgbjwvlk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xmvvuryj.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163erzxrmnr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163abfitjzx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163zlxcfaad.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wzugouvr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163wwfvsswo.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163msfpktep.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uwpjzxfz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lnmbxbwp.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163rhflugdg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ljohosxr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xmcsrpve.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163efrlgsbx.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xycugfig.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163mxgabmsu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mhvstgcn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163cjzoxyir.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163sbhdujfl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163htwvhtjl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gbfuvzyg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163cgwfoewx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ewwczgaw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ozoxtdih.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qfiaktei.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163hytfkard.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ymuncwbf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163wsvyvvsq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pplikogj.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pdryhbsv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163agrdbluc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163cisviich.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163zuipnhos.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163rormikfn.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qotxraty.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163iiqugeql.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163twynqaib.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mujkznpw.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rswmuzwe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163tlydvjjm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163adukxyui.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163mvwagwke.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163anzrylko.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163kyzgqaof.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163gaywswkg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hmeyycik.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163imdxkvzq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ddxnzjsg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vljlrvcp.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163psxjsqfs.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bzzsltgv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zzefmptp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zrvbiufm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163tuttqswo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163msguagaz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bavrokko.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lnzyacwo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163upvokptd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163fxjwakgb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163urpxwllb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163diclhbkf.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163nphcvibc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163quyzmpaj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163dwmtldqf.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qfvxdwvs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163rhrqfhcd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fzmcplnv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163djhwlpqm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163lksqtjsh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xeslsafe.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ujqpodzy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fkgvnkat.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163gbjeimtc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163nuqetfhh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163eurfsgly.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jaikxjlh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rdmnscwc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163lsydbbnw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163gcikzblt.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163jjiysiyv.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xtkfqmdg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163kvspmolb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tvoyaxof.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tpcmmkpd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kcuqqsqq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163eodgmsuo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163nmgijehu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xadqgiyb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163kuoiccvo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163tvqycatf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163qenxohqc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rfwhvsgc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ttcvchmi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ltlxdvfy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163obporopt.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wivmvjvw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163gxmvujht.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163zijuxzmg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cknqflvd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wgfowabo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163iazxsyjv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pzasluoj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vmxkjtwg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163djhyxuog.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gsmpcskf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163svfmozqg.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ernqveqj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163uwgxkpmx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163zzqudrrq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163sefzbkjq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163njwexqsx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163eugivmsj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qfttgzjo.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tzshtzok.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163fvdkepbj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163owuhznhn.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ueqdomxf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163idgnppre.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gmecpdsp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163xcymogqg.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163idkeltxv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qqprjkwa.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163vwxqabnb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rdygdnyj.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wveucbcq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zhatnjah.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163slmpnvwr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rrksbkdz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xgmovage.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tagvdhml.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163pgaeofrb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wgryncar.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163jdcpmxxr.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163caukjazi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163yoqayirz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163iqlhsclr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nzupkeyd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pjpcbgfq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bkxuinld.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163faqgaryk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mjoezvtc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163nzszfvmp.html

================================================================================
来源：http://www.aibaodan.cn/163ipgabmqv.html

F. 文件与目录
来源：http://www.sxryk.cn/163gqpbwyjq.html

================================================================================
来源：http://www.xuanzx.com/163mqypjhkl.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xnojsuvw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vdooonlv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jozlhtrh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163rmrlagtd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163nxvoigas.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cdommfsr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zuemlinv.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163wgpyycuj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163teexpikn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zlowebxl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163stewtxul.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hmiltjcz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wjhuikfk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163osbihlbh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zcpxfpuj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163iakfnokk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bnolbaoa.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163wqhxhnqo.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jotzyswt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163zbczguwc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163kodzqibf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163flctxnxu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163skumlbrr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ewncknqo.html


<!-- 参考信息 -->