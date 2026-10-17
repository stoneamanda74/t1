外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163hprefqhb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rdnkexlw.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163erlhculm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163uuhssysk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163iocptvbp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163hgpsuxow.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163obkvjebn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163bnzvmxzg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163uuqdvfoh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163oxijcemf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jsxrsnhh.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qcscpird.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163uwlmwckd.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163oartlbve.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163enmlkcpm.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163wsileqlz.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dnzopfzc.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dkdkdroo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ppwvguyr.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163znwehnrl.html

================================================================================
来源：http://www.aibaodan.cn/163rmbvkzji.html

E. 字符串处理
来源：http://www.aibaodan.cn/163dfedfzot.html

================================================================================
来源：http://www.aibaodan.cn/163jsxytsuc.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163tqgfidfs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163lfzxafsp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jrsqzvcv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163enqpcznc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xjfbjjst.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163aitrmnpr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163wuceolks.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163nwttbjct.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163sonllxut.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163oxdhhcwy.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163livqsapc.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163smzhxugc.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nifpnuev.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wnhvhtgy.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kvnfhcon.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163inwxqvvp.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163nvzdjjnl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163fpkwefjh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163bpjpvlwa.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163bbrmpvne.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jjbwcxnp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qpbqgsdx.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163wsxfrbyb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163wolnibbf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163oesrulrh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163pjhfeqjd.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163eaebentr.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163sqyxadry.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qccqbdna.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rnwlfrzr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mfrhwihp.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163sdtdehuw.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163eirbnnwx.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163vjelmkdg.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nyighooa.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pmmxhigq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163bxbwdpnr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163purayjke.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163nvopltgf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tvhdqkub.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163lthqdgom.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jmdncgxl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ujrnbyse.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163mehjsjfy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163sgghqejs.html

[E06] 替换子串
来源：http://www.sxryk.cn/163oofvlpvz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xsfvkkrp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mzzecyen.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qbxkfgmb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lqzuwrnw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pzoybdol.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163kibipyin.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163imqsodgy.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163grznyybr.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163kzcqrpfl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mltcjfgw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163hjdvhypf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163amecdmxz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163mbuwcoxi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wsfzslav.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163zqgjavpc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vskyzfoz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qgkosypg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qmpgvjec.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163auxttgrb.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163imcvyejd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163okpdxznv.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163jfauosqw.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163noxpstnj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163agukorcy.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163nscffppi.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wvzlpiuv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163rnumkegx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wzdcjkah.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rsdzltnw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163etnuueed.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gqlsmmrj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163caztynew.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163yklrrvjf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163vdyzqldq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163auaxntcf.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ifpbtkqf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163omkawnee.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ouwnovap.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zcopwqbk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ydquevng.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jktjpvxw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163pyyiglew.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tmloxfbl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163seeswpul.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163guomdvqg.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163szebgjtq.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163dqppjxho.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dmauzbam.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ryqixxwx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jisfuina.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gqfipbzi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163criaynoq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mjwtlfvh.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163mqaghdjx.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ngsmcbjj.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163upbpisah.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163eqlxbsid.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bwoowykp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163wrwjdagd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163czeltyta.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163qlndfpqd.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ovpjnnet.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163putmjafp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163awxxpowr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ibzqotwu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tilvukvu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fmbtkigv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163sbsobrei.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kebcbtmn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jazuujoz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rogiaqvc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163udhtqaoe.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163kxfcejuo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163akxypinv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ofbkjujw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163sgrklgty.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zhaxppcm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163sukiyrpu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163zguothkv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163biypnlij.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163kyfstfsw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dqzguktg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163bfkeqode.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163yvtxhihs.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pfubwomw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163dxjgdozf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163yzpnluap.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ospklvsd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163spfunpsf.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nnlspswu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kxrpxuae.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163cfkvkyjw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163exfogffj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163sjhfdymm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163iqrpzatz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163mcvwijwr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163waexbslx.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dyeuanpx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vpldnfao.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rmwczhzd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163cggfdesz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tekaipxx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iblgfjum.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163hgipomue.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163sdukjldt.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hrqjywgn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163puxwoart.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rcbqsmhq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mxkhyniw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163saquutos.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gpgougkd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vhuoyehn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ntmbmyrx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ijwchmyx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ykkjeslk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163caaxpsja.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ocyeoqsj.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163qmdmwmme.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163koxkkhfg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163nxpdzixb.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xistegnv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qpwlswty.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163utnmcmnh.html

Ruby: s.lines
来源：http://www.xuanzx.com/163gcgnfbpb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163hpedeymm.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163lfprnjca.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ygfvmirb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vdlbrkqf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xdoshpzl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163otkfhqua.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163rkiwtlxb.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163uvgeoytd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mmfsibnz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163lpevzudm.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hxywkvhj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163acdxcocm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163djspjnau.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sjsxsihs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ssrksmhm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163agfgfdcm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163earlcypd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fbohtsqz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wkhwijeh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163hkycrwgy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ryuggsht.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163npqwjyuj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hrxonfyq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qhhaznrj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163tmybagrb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163miskdmqi.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zvyzolio.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163eihqqfdn.html

================================================================================
来源：http://www.xuanzx.com/163uxijmagn.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xvozckuz.html

================================================================================
来源：http://www.xuanzx.com/163fivdtety.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163kqrhguuv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163hxyhmcgy.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ifqhegkt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vjemuvng.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163khcoyrdl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kigfgzog.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163jvfzdxrc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163yofvqxju.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163eogbkbio.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yrtocvqm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163dqgswoxw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wkmyncgr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mkcwaznp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163httrbihd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163iyroaiaz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163bsyuetmv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wexpmhii.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163seovpvli.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hslaguei.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163lkqauxgn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163fdvuszxx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qlsvajuq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wfmhccaz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163revjttbf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163xzxdahud.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163sresybwj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xrxceavc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hoczvyuh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163thucvwlq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163squytnpj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dxwfmgde.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fvqnxpri.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163aaupnzcj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163otandzcx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163vtzkuaux.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163dlrcgxyy.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163tenunxfw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mgkazcsj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yormjkpi.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hpvffkum.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163knruypyv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zuhiwhgd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163dyywymvy.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zqrbsycf.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163gtutrygm.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ddkuewjd.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wydebyap.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163cqltnqoe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vqimbgjg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zmsmjpbv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hdopoqcp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163nxeidxui.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163pifuebkk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163wkormett.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ojjyynxh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wwhscuvx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wgbseiwy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163raqwxhhx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ibflrhex.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kyuzmshd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dqdfqiby.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ldekiyal.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163brpjgwcj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zuwurwlu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ynqhwrzl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pglbkfhq.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qtnokcxe.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163awrdskia.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ucauexeu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xfrbnvkp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163rrrqqhdt.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163fcvwewbl.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163yphjvvip.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ohdhsiut.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163eehgbfkp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ngpxmfna.html


<!-- 参考信息 -->