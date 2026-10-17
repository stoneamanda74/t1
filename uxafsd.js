外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163rijmwxxo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pobmxgdx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163zwkmbbxc.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vcoeyaih.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163uyfdorjn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163nqxzwvke.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163yiqegxng.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163fglxfbcy.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ngllslqa.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163snbyqlzy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wrmindgx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xljmixoa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ptiuzjef.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163yiyksphf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ieayjchy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163umkmkkht.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ugblwkmm.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dcxeigyz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163vyfxtjdf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xtwufjqv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ubziuapd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ujoowbbd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163bdpsyqqu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163gakpvhvi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ydrpkybu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wvhpvmgc.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mdpkyybb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163nvqbmyyj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163crqstccn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ihkqyqhz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163nwngcqvv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163xwfcfvrm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163gstvlizi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163moplxbby.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jvxomtio.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163rcwvbtqo.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163olnlnagw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163tuigcgrg.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ctzkjplo.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ymtoobcm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vxsdmuwo.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163uvffiuyw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163rnxlurrz.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163viboepfs.html

================================================================================
来源：http://www.aibaodan.cn/163qvlvscki.html

E. 字符串处理
来源：http://www.sxryk.cn/163wpmavbmd.html

================================================================================
来源：http://www.sxryk.cn/163ryswxwyb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163pxvvkonz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163feuqznwx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jlrwzway.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bqwqlkgg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ykyblrpu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ydirmxhb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163nrouukzp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kmqkkqab.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lzrlaaah.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ibnfukru.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163alsmiuuc.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163jrvvzvwz.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lsuuuuxh.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kxgghago.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rmjzcngb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ypexoety.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163xzcoaaqn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163wnmlhprk.html

[E03] 截取子串
来源：http://www.xuanzx.com/163tlfbehzo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163twbmmtck.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163enhkquwf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163imldxtmh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wcqafgiz.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zafwletp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163qkcxfbsz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ykwnrymc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tclfralw.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wfgvqxzg.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163epowcflv.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163vbakwgzj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ncgniats.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ayjmqujw.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163novyculq.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163mbnqelag.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163dqrsjgre.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ksblsqlw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163vjlwbvng.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ubiqtkea.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163xrjnilum.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hjbxwchc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163alougiae.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ktiiuedy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dwynzuee.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163gbaatjyo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ljbhzhpn.html

[E06] 替换子串
来源：http://www.xuanzx.com/163pxodirmq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163evfibvwu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rowkevgv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jpekxbqc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lkuufbws.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ymovutrj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163anludnlq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163xxppifrc.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ntorgvpl.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163smyfnkeh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163kmhezkdx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163zpkrcshh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bgfnumzo.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163zmitpbxj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163fuszjuxh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163gglfiqvi.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163plbltpav.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163iquwiksx.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163msxzqqjw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ojflzsjl.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ikbdivmp.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ioxullrs.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kcjjwrte.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163nvuxvjfy.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163mavwwhgs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ggwnxfkh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hdmmzpwg.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163rhigetkq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ilflybru.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hylywnhz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dkbmualu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wimhcpwz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163iijapfrg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ityhlkbv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ckxsilgo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163fhzsddwi.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qopkzexb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ztrcmdkt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xdotypmf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163axlxqceo.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fauhierc.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ttltdujg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163pcrsakmr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fqwuavov.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163tpikgdzp.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163iqyylgym.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163qhncwtcb.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163jkhnubfj.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163trzqgdhu.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163scnbcwvg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163kfjhtvqj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163bljmkodz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163aglgtwyv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zufudtkt.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163oegcrhgd.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163mgomlben.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163kazmllzx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vdpzcxvt.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mrlwkrqg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163cvasjzvl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163rnwkhqvo.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tcvadrfh.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zehmwtlp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163kcnwihja.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163aaeavnui.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bahdpien.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rtjdlxid.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kwtukiky.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jnxmoaii.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jjubgzvo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163gnjgtjsw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163aocicccy.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jdutphjf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nrtksgcf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163zzbnhwgj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163iuqngehr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163tmntqofx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163tckerwca.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163qmcawfji.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163jjyvdxwj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163wxdikzux.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163nspdxzsr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fgboybrc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163jbqogijk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ilqfttbo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jvaoujrd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ysovfrjl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zrbxwuir.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163warytpzg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hrggaklt.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lcxzehey.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163qdlksmnx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163whvvjetd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163boajnqqm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163iuziasui.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xrsvfuto.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qsdurbrn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163madaqcxo.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hkgsrehu.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163smxjqfff.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163zdluvoyl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rvcnoezi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163stazpmko.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163facwedpo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163dgivnmji.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xzdendyg.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163znjrbkae.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kiyexaja.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lvxcmoem.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qzrxrnny.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nlmsuaaz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ursbvrqt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wcvoijlx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hfruvnxe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163cjfraenk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163sulcgwwu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bomqblbc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qhiwabrr.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tfeomwis.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163mwavmgmw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nvalzwdc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vaktcopw.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163mrcylnwx.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ydbivwma.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163yguemzop.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163uphedevq.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163kkhsjjbj.html

Py:   if not s:
来源：http://www.aibaodan.cn/163oyryipmu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bviaqjxa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gfgzsuop.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ujwotdlz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163zpqqdvpo.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163puihmatv.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163kytpcadr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163njakceft.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zuqakfjh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ydlwxqlv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163mppiyzba.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uphaaxvk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vjhyjspq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163llqijsmh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163yuyoromk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jbwfxrkr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163iodwzewr.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163nwgimoly.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163wtioeuuk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nrxkhfdf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xpvvhwqm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jasukyna.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163kohmowlj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163llisfgvs.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zbngrszr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163swxdsylg.html

================================================================================
来源：http://www.xuanzx.com/163bqgcqvli.html

F. 文件与目录
来源：http://www.sxryk.cn/163peikbamg.html

================================================================================
来源：http://www.xuanzx.com/163bnsvdhtu.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163hzipqlac.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163frpztzlh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ppfhwfzd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ytqamtep.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163sbwkkzyq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jgoucofl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ghykdzyl.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163iwsindev.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163xgaitbgg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fsbtzlid.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163obfvstue.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jvyrlzhp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xthmdxcr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163varburmu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qgdedqae.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163dhplvmfh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ybsmtknp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163esxqftrj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163telgqaqy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sqgurfjp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ywhjiuiy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rejzpdbt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nckvwuhe.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163sswqszuf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163gdyrmynf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163livtbvxi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163venuodsr.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rjmgxrij.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163qaveuiuu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163fjqhjxrz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pklcttaj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kkqqybmo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163jhwurotr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163oaiwouwr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ecnzghjx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163gvffznjw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163btrrshzk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ovzpaplr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163mppdsqkh.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163byfzxjnw.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wqosonro.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cgstlcem.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zlfzhklg.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163romcutil.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163arhznmso.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fsgbqcah.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ykggbjvb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163fftrrvwq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qnwjtwtj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kruflvcw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tzhwtyge.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163dymdrjok.html


<!-- 参考信息 -->