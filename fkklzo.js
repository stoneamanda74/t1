外链999!wailian999！

[D19] 按字段分组
来源：http://www.sxryk.cn/163evfnymeu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163gdpaxskd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163jwvmyqpi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163kvfoezot.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ycdtrjit.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fswgvybo.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163nmqsosfa.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163deguusrl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163denrbmgt.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163uowivtsm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ddnvjsvs.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ryqwhpal.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mnngdktt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dytufjuc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163cwfkmcsz.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163jjvlqkps.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wmaxdyiv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163veuntaoi.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163naxtebgm.html

Py:   x in arr
来源：http://www.sxryk.cn/163qppdotvu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mucbvzqo.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qekixsnc.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fsrycsbw.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163uismbdfd.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163gsyzdnqc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bewqbtbf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163znlrfess.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163wiwgxyhs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163feskkviz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163mxjzasgj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wsjnmxki.html

TS:   [...arr];
来源：http://www.xuanzx.com/163osjxcfvr.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163draikxjg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jcvqecdz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163jkkhmvpd.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163yanvlcja.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163nmcvxway.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163qfdajqsb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bwfrmffc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163txjjhbsh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yhntnsrg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163lvfgygyp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tmehfxzr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163bpkoaqus.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163eggisvpl.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tvynhjcp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ngtmxbli.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163mkxkknht.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163sjqppurk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163dupasffp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163tggyowak.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163zbxjigbo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ncuvcsjh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gmconwlw.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163kukafebl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163lqkqolql.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163dragbeoo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tjagvssm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163rpmuhbfm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qbpsnngk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163agngpquy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163usetgkxz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vqjumisc.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ydcezpvg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163tjgibcbu.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163dlaluzdn.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163safqkyhp.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gihyioob.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163fazqxqso.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163bntzipkl.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163lsdzlrpi.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ncgxntok.html

================================================================================
来源：http://www.xuanzx.com/163dqvfgpsr.html

E. 字符串处理
来源：http://www.xuanzx.com/163zwdzvwte.html

================================================================================
来源：http://www.sxryk.cn/163rifezles.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163benzetmi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jjnqvkbi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ecbawsbq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gcxfxbqt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ndqbwhkq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jqiyogpa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vqfgirsi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163wcgmhbcp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xbpidnie.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163nyobaqwo.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vnlnvxgc.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163dsqqejha.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ebdktqkk.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hhtzuaxj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rxxtxgxn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163fjiwkigv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xcfpfagu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163nvoidqpe.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ccqpcccn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163dkkepxmc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163npnckkcd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hqbmikoe.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163khdyzkva.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163xysrhykz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163zthprjsg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163obemyamx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ynmqtbxv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163lxptoybw.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163onalhqnr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ruyiwhyy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163wdxiaxjz.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163sxlfywpg.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ulrlejba.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163hryzgitm.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vsfolfhz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dtbphxet.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163opgqcuvp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163iiayjime.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bjoicuqx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kcpyqudy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yassivtq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163nflalenq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163htcdsrpm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163mvavijoh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163phlxcbir.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163yclrbrks.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tgjiixxd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163vmjjpyii.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163sjvymode.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zseiidyd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wcrmhfcn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gdghayyo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163mhdsqixd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xxdmflhn.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163kjuwriuy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163szqvmbnm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163vfisrpks.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163pydnigeb.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163usambaqj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163uhctnaih.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163gelgbdin.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163nxvrlssm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ypqcpmtp.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dtbbverh.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ntlshugi.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163elbevoxt.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lpyexgmy.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163aydcdldg.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163obdhrkjt.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163aaakfctv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163urvghcft.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163aagglqvn.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163iejzioxg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163pqcadkkj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163qncdvaie.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cerjwlrs.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163sppfeptm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163uuumutgz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163embmwvgj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xmwklowo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wjowunny.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163rtjefmfv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163omxjrrjb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163freufjpi.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tynvtqhb.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mxtimqkm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ulxybxlr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ynmbpvtg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163bfcepcul.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163zibnibhw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163znebyzdb.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163xxvqzfbs.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tfttcsau.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tayodkvz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163civqhgyp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zeswduba.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163usbxjkob.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163gtliivrr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ozdmlblx.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wmmlbdmg.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163jwrbtgsv.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163cnjzbzqc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jwvgdsdt.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zslxfrzd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163tuzbmnee.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vhnnbitf.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163cemlqmrs.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qlfdiyvs.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163airtfiqb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163yttzcjzc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163qrgfsacy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wpgkydxr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wuptvbmh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163cqlkwkan.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fckqgpif.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163huqpatvu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163khvqnbwj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vlbjoidx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163vlbbtsrq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163prtmfpno.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163bryulrmc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163flogtllu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163avslgjub.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163mtinlvya.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ztzrdkgf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163kaqblbxh.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xnvbijdf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163kckibsct.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rzhzkxob.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vrihsxsg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163adotntrl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163epfbukey.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wpptleop.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163loeuiviy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fwejllhi.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ryqrqopq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tzlrawtk.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qiklxafd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163whezdpvh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zyuyzncs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xrroohaj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163wuoxwfww.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163uttgurzf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163itzgnrmj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163telgpybp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163nwzlwizi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163rvocireh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mleyrlsc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rfztenjq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tyaoryfk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163qlohlpyi.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gyiqylby.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163giijdbix.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163afsgcdrg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163lqxusuvz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163voigqqyx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sbcuwxkl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163haqnfoer.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163novxqyzc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ioltgwrd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zvffeqtt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163vdtcboix.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163giyrvhrs.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163pbooxrxc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163gultlhny.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wwopzook.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ffyfjsde.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ttcewdet.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163qegxrhaz.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163owugoxtd.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163pwlicykj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qhkvyfdk.html

Py:   if not s:
来源：http://www.xuanzx.com/163cncyqoye.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163rgzjjlbf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163snimoexe.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lcgfmevz.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uxjxfdkn.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163mdqzztst.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vuxsbuxg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163diyjncoz.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163uxkqjvlv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vvryhagy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rkbnwvnb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jxvdkusd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zzzbpqdi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sbhhmupe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163kxuukqbs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wkbrpcyo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163peryzfab.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zzmjwcmf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163qqbexjzk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ovystbya.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163aekjgjms.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oreuzzng.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fcpfscqa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wzkwluhu.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qbvfowfg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163tcqjelky.html

================================================================================
来源：http://www.aibaodan.cn/163bmtjsnsa.html

F. 文件与目录
来源：http://www.xuanzx.com/163feluukgt.html

================================================================================
来源：http://www.sxryk.cn/163cnzzcmft.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163hxyyurwg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kocvkpqo.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163tccatelt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ibxkyjyf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ghisabgy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163evzpwnio.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163kfjzswuf.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163blvvmccl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wxbqunbc.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zgvcncjx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163aeafqkgs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hgvushca.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163khusfddd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gyffrwfz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163klilqfjd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tugtzmjq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163euahkvmi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ymmcsiag.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wgdshrtn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163zwknyykt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ozqnwusk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mlwjlsbb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tjkgxjvj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qfuqgjyf.html


<!-- 参考信息 -->