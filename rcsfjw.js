外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163noozxsgb.html

E. 字符串处理
来源：http://www.xuanzx.com/163lohmvpfz.html

================================================================================
来源：http://www.aibaodan.cn/163xwaxlmso.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cdfijaiv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163nxawtoab.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163tnrouuqd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tkoidmrw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163msoznydn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xvnwdkro.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jkrnvoqv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163efevfouv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mqhhazlr.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163czyxuqxb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163hqtzrzei.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zuzfubnf.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jlhpmhzw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ghmlvmgc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163oyvmvdxe.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jdwlyxdx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ixvituci.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163yyscpdpb.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bjpsqlpb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wltuoccu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163sdctxtri.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jvcadyyh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163arnhdqtg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dgjmhkxu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163tzemzazr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163zpldpkgt.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ytxrvofe.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ggzowmrm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163wgvqbpfb.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163usahyigs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zlrwwsvt.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xzewlvpy.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163wsihlyhz.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163oviclhph.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qcuibaad.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163krvolxky.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163iffzuitc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163hoolfjut.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163inxjsnes.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tehwntyd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163fytqvzwl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jaqswjvp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rrvtkmcc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163wefbdoqv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163sgksmjjz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163bkffrxfv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163exgomlmi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163skjtxter.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163awdobnjc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xcfdtchl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rnxdrybu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ymfpojlo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163pvpzaong.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163sooyxfrv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gzloubgt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163sacpeuvh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163btwhddna.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163qruerwgr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163qetlnfhr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163iclzlclj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dpbxfhud.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163yvpxnzbp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163gptkmlzm.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jbzeyehw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163hblhwxqt.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163whvsxufg.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163yrwjhvwr.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163puncjpaw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zrzgflus.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ebfvjyoy.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rcoypruz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qslfbaiw.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163urztbgkv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163cgimnuue.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nhavvbka.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hfcvgntk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163utijlktf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ojbuqvhd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163dqodxsqg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ubwchsjn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vkpanxno.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uyhottvq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163flgqxpcz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rjeoefxy.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163brhtlzbe.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163azklqezs.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163vtunlqos.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163pckjjzrj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163qyidcsbo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ifoplhgj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163xceqcjgm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163aawbumpk.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rcojdbsp.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zrvzuhgi.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163skkuidtz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163tuydymli.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ccamkxvx.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163xszrekzt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ouapqrqs.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163iorzbgsi.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zacehurq.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bfxdvgss.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fzxopchq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rswlzdpg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163xzuwpnoy.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163fclzbbvy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163dhzostfz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ngkabwlj.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zxgmcapj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mfngqheo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hlmvkfcu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163joonhkhk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163aitxvhhx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ewyafrxl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163inwhytgz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xozfsfle.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163yecyzvfw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ydibhjiu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163olefukzk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163qhvkbxbh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rcdsahsz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163jufvyhrv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163uyghwqqt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163fvqfbciu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163pvhmortr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163otbyrwdd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163rcitmava.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163cehmbegk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dkournve.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163fbeemciv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mwofsger.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163lvuqxfwc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163fluygnrp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163fseaxmvu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xkijsgvn.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ctfbxuks.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163eaztogls.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163peiisnbi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vdncnwds.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mtgjurvt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163yincbuhh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163adomsatm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163zgrijbmv.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163mndxxjme.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ueywvxsa.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163cxngpeqw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163qxhbbejw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xipkdbgg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vdjksupl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ilfbdkvf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163uycwibog.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163aaueyfye.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163nplperzv.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163sbxkfeuw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ypfagtur.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163fsfcmwej.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zmpezkoh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rcerhpqn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qffakrgv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163bfhboitx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163htovsuhv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163adhfdsac.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163qxpikjok.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ouoxsetj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163mohuyrvg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dmwdbvla.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dbfmwewv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163yfqzsbxu.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xpeycqml.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kfrmldfc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uhehgcpy.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163vyhjltrk.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rgzgdxfs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163rqnsogup.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hgonhkbh.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163xxixxzua.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qwqdefic.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163iwkvtksr.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163pjlrpibs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sufupora.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rxmpxgsj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163cmizhowp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dtqtpred.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pamfbdzr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ndmjvmgs.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163avaxcpkc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163tllffweh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mjbgnati.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kntfshey.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163itwchdun.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163uboxesjl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qreibbjm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yfrlkxff.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163amvireoe.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zxxfduae.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163bomkrzvs.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163shpheglv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ooxeivzt.html

================================================================================
来源：http://www.aibaodan.cn/163dbdgjivn.html

F. 文件与目录
来源：http://www.xuanzx.com/163walbmnfg.html

================================================================================
来源：http://www.xuanzx.com/163umujfmyq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rihgyeev.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163eiyungug.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xtnudmqy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163fmmmciyr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fhuncyvy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163psmaafxq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wqfdmqit.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163imzhyvjj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yviewxrm.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163eiwgtddw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163oscomidh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163gjcqlbmu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fruszlnp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nzzueaud.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jgosxskq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fkancxve.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163touxxzgi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ydklqpgh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163rbwdahaa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163yjrligzx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163kesvvspk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pqmvbtoj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pctzqkrl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163uazjimlq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163mgxvwbsi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163towqogbo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163avysmkhr.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jhawvoaf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dpdtovyv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wjwgjxrc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gijhqxop.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163glfbzedk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163eycftajr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qrycdzzi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163pzyfgbyt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ozjgcezg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163gbpgqlai.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163qfxqneus.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163usjnkhzw.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lqxuklru.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hmlobwir.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wspftccw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jzzxxnib.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163eoaprebn.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163birrjggw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163btrlwvnm.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163qqsjltwb.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vazxlltk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163krvfvvud.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163agbznsfh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163patnvlrx.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wwnnjyzl.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ahepghjs.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rajgxcuf.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zabxfdia.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gepihafw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xkvzmqdd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bpshaebd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dgeyntmb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163jfltboct.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zdqaojcj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163uwudccmz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163sthxgroh.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rivlbwcx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163dqvjwpdb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163olgmpbrh.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yjzhdyik.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qgnsrtld.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lofnggqe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163slrgerri.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qzltzutn.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163pvlunogi.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163llgbdhmp.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163noqjjqpo.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xbxkzdap.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163peawsvtm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ilokjryp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kenbeshw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163yxmbwdih.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163vapbnaog.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163lpfsrybm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163dqiuzozd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vwvbbaks.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ufpvwjgk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wwwdbrca.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163cnbnjpel.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163nbmxkogh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163xtktoowq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163itdlqzhm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163sjtxjphx.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163gaiewkdv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rwuxlcmf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163umrjnipi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xtbspiyp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bhatwmrx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jxszcxhp.html


<!-- 参考信息 -->