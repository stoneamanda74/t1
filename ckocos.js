外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163qaaxhtwv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163rfsnylzp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fohotfkg.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163axlhajdf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163xjczyinp.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qhiwrwkh.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ehgtgsrm.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163eifeziam.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163woknysgl.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163opfqozxe.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zhthpwcf.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163uozvtbcl.html

================================================================================
来源：http://www.aibaodan.cn/163zdreyauu.html

E. 字符串处理
来源：http://www.aibaodan.cn/163mhexphxz.html

================================================================================
来源：http://www.aibaodan.cn/163dlavqqzh.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163bbndvsjl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163xkjurgkz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163lagwlgms.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kwwzxapq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163lopbnjci.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163regvpmes.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bwnvczli.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dqylibnj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163uzbvxycq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qbbmujby.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vskugzsr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lfzhuxhi.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163olppjula.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ogrijtpl.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rkfbpjmz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qggxsrsq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163hkpnnrbs.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163cvkfracg.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163lnwcdupu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163awikuhqb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163aexgqolv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163peuovaai.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vjqodeve.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rbdnkxas.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163zvohmvpv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163agrolzdm.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163vsnwpqjg.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163njwcplka.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163hkuavuuh.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163iagauram.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ftmbmair.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163neeqwybo.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ahjccqie.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163kpdnznpw.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163wabtsdiq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tbehjbvy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zyrtoiud.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163scdcfsiv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163royvyrow.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cklbsuoo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hqwpowki.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jnijpjrc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163fcbhwioe.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ofjolsuz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ksshsmqb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mrvilemo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xfdkqblv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163gtvizphs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ztludxxa.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163czitytla.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qpwxijow.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163skkmfnow.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163qzzxwwrz.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tsqqbvnl.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163cscwiohi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xxxutsuf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mmopvmkf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163lyfsbzer.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163pxgbgccz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fdaxyqrz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163sskeeeve.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163iipuqods.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zhcfzitz.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vqwakrzs.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ybtyuaqj.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163czglkpaz.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163xklnjwkh.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gxrwlsdg.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163uljdvuip.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xvjzasih.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163halrfguj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ueyaggqx.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fqqgfewl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163spfcylhr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163zwxsithx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zxjqeunn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xpacoxdw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163rgvobzle.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163wbepwvem.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163usmbvevi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163qfszizmx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163zfnclvci.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jfwhvatf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163fctmxqon.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bkahriud.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uzrquzfx.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rkdspsta.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hbbluwmp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wxvaykec.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163svdbraql.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bkgbkvje.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163xwxrsiki.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163queevcvo.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fzklkmrw.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zlzowocz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163csbceknb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mtuxvyfy.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163agwinjkz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yvwwcsee.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jxmyrvgq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163enmsptbu.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hixyleve.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wzewxauc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vivnshgf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163byjwerei.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zlsqfadr.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163clpuokyn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163sofckbiq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mblibgkj.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163fgrvxiig.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ifkxdwap.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qrkqaabf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fesbnuxy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163owopiljs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163hdsasghw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163jkzmcxgn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163esjckduo.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163gaizilsn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163guqmoyam.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163zrdyuzpg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zitwroqq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163urahrdzq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163bggjewkg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163xsbdkpoi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ypjeboiz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163akzvboun.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163jvbrqiwa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bcavrdae.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nzwicgay.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163gxpjvhpk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163eebtfocz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163gnnhxpjl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163qwlywfkk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hbvyucma.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163qsufywvp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163jfxfghkh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163tepimgpz.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hgdvebik.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wsryhtlu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vlplglkr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ydgajtop.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163gmeouivh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163bnepnicr.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163njbtpiqg.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ujqakuzm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vfzejzau.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163aivgblsv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fxydzknx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hiiqitjc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163jgfgmbph.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163krqtkkpm.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163slznexez.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163spfdqtdw.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dslzqktm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ahmhvspi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lrznlmjp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ughdbted.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wzwijtpp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ferukacd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zfpbmwia.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xcfgojli.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163tcznscpj.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vmotjgfn.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163moltyfwt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ppzactop.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pvbxcpwo.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kihanhbt.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163tamirsfz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163jfmoeqcu.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ezvpfmyc.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hypeeeoo.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163eartwjfs.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wsbihrfo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163rfhdeqxa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tyzvmcrz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lxznbegv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163cvrpbojk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163npecsjdg.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163joubilyn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qksohbtn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163wwbcubah.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wqaitcxu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163lujrcffm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sylvtgam.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163atmodnru.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ivbckxvl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163yhlgwlng.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zjlxkmeq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163hyjollqe.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163nelllbxf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gcnuuhsk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wadllqah.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163nxkxlnot.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163iqqxldwj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163lxmiswav.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ylwzzknv.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163icjqhqej.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163aewxfeky.html

================================================================================
来源：http://www.xuanzx.com/163inxcpxas.html

F. 文件与目录
来源：http://www.sxryk.cn/163szopehfz.html

================================================================================
来源：http://www.xuanzx.com/163vfhgzwor.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163cjyanwcs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163cjrimden.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163zaymrtjx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163sazxeeyz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163jotehwuu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cmriekct.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163kmkrjolg.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zyqvpzzr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163smtyarml.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qhaizlhe.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ouhfmslk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163oceyucth.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163psftfzvq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163augvwqhp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163auddsiea.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163bdytjnjb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163qbwgdznz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163obxtodlz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163pyaqfcvq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163uhbeshji.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163giquoiqf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163bvhdyqzn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hxhaobxn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163okjenqnd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163znnbqync.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qszxsnhu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163eejlxyxp.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qbmjcwez.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ignzoynj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vombbksn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cxrxlqam.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fpcwnqkb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163qdbzksev.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tjvdkhwf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163qmnevdkm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qmbfbuds.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163oopapozw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163naczuayd.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163lzfacugq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bnggsmzf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nlvnwcno.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eacdndzq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163bphemcgh.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gcbihtni.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163vebpuilw.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ngxoqamu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163eiogwxvd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rhhlzxgf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163etpmoszf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fxljhevm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yiekbxme.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yhnkuylk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wvysdmkj.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163vznmzprw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lflvhtqf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163uojsqnbm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zscmjakl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hnbnaryi.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163eltfmybu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163fksdddzv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163azqgdzmp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163skolvulc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163gmxavahx.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wqftntlc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163weghjqpw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163reyqxjkj.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ndzlbzgt.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jvxyuqox.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163khkkpoek.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fkoqtnvk.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163mbjmbrtl.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nhxbdkns.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163euzjrqgm.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xbqwtrat.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rcwdwynr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tdgohgih.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hjjyylfa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oxozvkji.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163zjjbbnyq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ckcqqgvt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ynsywnse.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163jzvcbarj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vhfrqgmo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163cusndedu.html


<!-- 参考信息 -->