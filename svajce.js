外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ojmcygbx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pjsqkeyk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pjuppjvs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163usdpflnb.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ulsglfes.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163pcvfubnv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ahlvszak.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nvrnxzqg.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163egdlwosz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163aohkyavo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163gvxsombf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vvuvsamu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163undzysua.html

[E03] 截取子串
来源：http://www.xuanzx.com/163abdrkbwc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163nvrojqon.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pfdylvdn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163dehtqhvh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163uiugbyxg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wnoxcyan.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163gxzufoau.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ryaimlcv.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pepmqmgg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163lmzpzzzf.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ucemowbd.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163vkdxnhkm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163hqoaipoz.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163tzdsousm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163yibzsvrz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163lwufdask.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163bbcgxkai.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fslxmxej.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163fecxztoc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163jyheuexc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ucpkxzfc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163birakfts.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163bcevugni.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qvlsqpvt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163otdrigwj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xfvxmgif.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163izlmirkd.html

[E06] 替换子串
来源：http://www.sxryk.cn/163bydnymxw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163onjjxijo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163npptmlos.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ybkxpoyc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163udfhtddp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hjusckfg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bbwdzlty.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vtzbaqvs.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rheinhcr.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163uebobrzu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163pymobfnn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dsvbklwv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163imwzndwt.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163uxralllt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ivntxrzi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ralpcykf.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163izklezqu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163scycxsgy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163kdxhzump.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163duffrubz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163vmulwvqc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qzwgtzcs.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kskyxagv.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163bptxfmxx.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vnlrpahc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163vsdovrws.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163vodwhhgf.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ftknmhxa.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163epokpbyi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163jjaxtzor.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yenwwxrt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ttzsobej.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163wdshovrw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bvfyvmvx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163hfyrfjwj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vtqgdxxl.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wypaljxd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163tpqjvjbv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qninhizz.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sgckzfew.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163lgjqdbtb.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163oqdrvhnl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ocxptpic.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mytyyinh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163kzkajvvo.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163txcmqnty.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bioqfopv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tmeagiug.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ftuiggdl.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gjkopyas.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163dlcwtjrt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163twdrpmdy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tcqdueoi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163eqxficgs.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163poxbgdex.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pbucohau.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ksppzddj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qznfclls.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bvrzveza.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ongnmkue.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163edhkwmjs.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163jgoklxuj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163czvbffpe.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163juasjvcr.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163zabctiyb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rigfnlzf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163szlaxhzq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bvwfynuh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tzclaufg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163emozicxz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163fciptatx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163xkbevnnr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bauefkwr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ymffbhkg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163uqvktyuh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163thgmzxtw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163yqsuubhc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wntmowup.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163olxbqyax.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163mmthhuqi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163inatzjgx.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ppzytkwi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rjimykvy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nmpuxeit.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163uegshjxj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163nkmaornx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163zicymkiu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163oonhycry.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ikqicqfh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163chwvyhxy.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163julpgxqy.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xmocyczu.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lonnsuhd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ddduevkg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ieiaznmt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163dxzvbsam.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163khxijexy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163xxexfbbv.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163tkfilxpi.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163kilewuau.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wrpzwvzm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163wgbpywta.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qjqbywvo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163waiwypms.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ddwvbrub.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163yaqtpruj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163injkdhjh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163djtjuxrg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jqgxdfxp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163mlbhejwy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bntohxmx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163olmkmaen.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xwfubjzf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vskolksc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163bjsfeeqy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163fqwdhkst.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163hhselizp.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ugilfnag.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163jwspbuel.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qryafbph.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163klmwuhmy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jnfppzxy.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163pfpicxvf.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163zbckkzlo.html

Ruby: s.lines
来源：http://www.sxryk.cn/163vryxmlta.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163klasxjkf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163zqcwjymk.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vyigalve.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ryohgldd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163notanbig.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163vusdepfu.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163pljodwpg.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163trdxtkrn.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163bkppdvcb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163szjdevvi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pgbfaulu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163lbzzosmv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ryhgctve.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oxyccukj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eojbjzvm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ovhqlhdg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kypyymle.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163chydxnla.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xbqdsinl.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bonaqgzp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vapgizij.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xftgxoqe.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vktzdilj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rdmzjlya.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163emltpgiw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163thfzxnfm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zvzswakl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xgqelvwf.html

================================================================================
来源：http://www.sxryk.cn/163qjjgnudc.html

F. 文件与目录
来源：http://www.xuanzx.com/163rawfaplz.html

================================================================================
来源：http://www.xuanzx.com/163noqzoaog.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163pdjjetdo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163icygbnop.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163almjsjoh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163orsiontz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163codjkdep.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hzobprrd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163bwgvsjtw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gtzjdcux.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gfzeixuo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ykhkrwxo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ryhxqicn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163tlwajgxp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fgphiczd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vjxaltnc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163chebilev.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163etpvttjn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rgjdtmyf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163owkdqyvv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zgsjsluy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163crdljnfy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xvfhwbuo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163syqzkpfk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zpnwrjmj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ehunizcw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163btmnzdnb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163caudfqmb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ngcpvdad.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163owpgiayk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163kuahgtpi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ttamnzkc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ytjhdpoz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mlcjzggb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ykzaupbq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hatjpdme.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163vbcigepr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tahvbxxc.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163phgdgpyh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163pmkarodg.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163avtcfybe.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zqtflxkj.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bfbfzgbf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wuiwwqar.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163oczpmvvf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163uktcrqin.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163udurjqdq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lvabgoja.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ojsslcgr.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163zzmsxxwq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163emdpdthv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zckojnyr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hmgoatoe.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163uvcyqtcs.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163pbmltrqd.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xuubnlex.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163xraqhphl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163thswwzmn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jdjumtnz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ykwvrtml.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ejubkltu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mzjsppnq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163oxwwmwod.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rjuyqfye.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163jkngoaec.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wfjeefuz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vcclyydi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163mumwvwsl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fljycswr.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zpshvuit.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mvzgjqxm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vdvyhwql.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163djsvansi.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163suqefolk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ajgzwich.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163nmoywohy.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163kfdqiwng.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dzaswdon.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tarftzew.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zcvojlmx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mcnxbdps.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163icbovyux.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163iwzhgafy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ihqxjmfa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bdpxyugb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163albzvibq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dpmzxlwy.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163dfpslpiz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163amasvmnf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163vhgcfrvf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yawslqgp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163dqiazjch.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163btddtwft.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fzgbazpx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163gcksdxka.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163htjfmoqm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163katwyqfc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vizjqlzj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qvstlhxx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kfvbetzg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163awcjdaej.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163epblutwo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163mvtabgmp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163idgvrmfy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163vpnxiiff.html

TS:   // 同上
来源：http://www.aibaodan.cn/163gfcwmczu.html


<!-- 参考信息 -->