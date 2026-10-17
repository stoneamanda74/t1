外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163kwzuyxvt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bxuugpzz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163psbwjmre.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qwhworpz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163wadqseij.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yloqcfqv.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ylxlnxze.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gooiwnrp.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wmgqreve.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163pprlceir.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ejecnmgd.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ygavwazv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163qjsygtlo.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wbsnihev.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163aozixgaz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163uradjvhf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163vrggtqvy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163unwhmeqn.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zujpftlz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163oqvsjxkk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mofcgnmo.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163lkjukszs.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vwlolstl.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163pflgbslr.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163miiqmakq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fropuvar.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163yyhnayxc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fonyekno.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zeurzjip.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163znuiokvp.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163aedrjejf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ftdiwbyx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163abcehozb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ppacpcca.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163izfiopuf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163squabtzi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vddbirbc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jwmcdbaz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pmmhhrib.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fzshziyf.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kyrrbvzg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163cmuumoxx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163uofedgcn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163sdrwebwm.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eumcbzat.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ocvviaae.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ohprctzj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163sqpdfkkl.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xzauvyri.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xpewlpiv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vhcdmesk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163bggdnhkv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ejgvcnah.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163maanwlrj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163maorpbwl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tipbvpgu.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163baskgsdt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163fairydxx.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xqqkqood.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163klmzsgly.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163qzhrojsq.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163pppuyurx.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ucpagzzu.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163quiezhmi.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qbolyyme.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jiatgfsm.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163etswpfke.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163kdgschhf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163vjyzjsvb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163veyxqhwd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xmfgfjwq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vdzqalox.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163voyqqpyb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163dameudez.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163afbiuicv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163excdbfmr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xgzqunil.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ryfaxnec.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qmhefikf.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gyumipea.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163uojprxnf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163giaqkmne.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kooqjbjh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163pyqzgfei.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ukiwufis.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163guccqxdw.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163firgavmd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ppvfhpjw.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bnvipwhm.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163edwtdjvv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163vqlsyfje.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kclqzusa.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163xooxwdfu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dbxkkdnd.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163kftbipqn.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163umejpkfa.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wljjdpcd.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ejckndma.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nxxdtggf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ikfghdqt.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163iaoojxzl.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xgcklkkz.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163exdreape.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nayapoby.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163tuqsjfnj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163qtxixckb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163obykqjzo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vleykmlp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163upsjaxmk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163tftzpnll.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nlmxpnyb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163jirevvxy.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163egvsxlxc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163fbkzppic.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163mjbppntz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163baexyhnj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163infaedkj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163lvnaatca.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wjsmecur.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163bxbinkbo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163icpjbnzs.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163auddcwav.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ommnmyvh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dnkmutkn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163entjzguv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mcuvtpru.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163bdrkjmdj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163mwdklsop.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gxsoogcj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163xzzxhjsv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163wkoimzvf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163mbjwfypv.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163kehfxfmq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ovbbyknp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xkbfsglj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163atjywpnu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163nismqemm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163byjtdgeb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163keqempze.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ftmnqknu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163svlnqcvy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163culjflio.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163asplkwpm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rywweiip.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163izdoevnz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vjcjakob.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163jlvdtwkn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dgiboddi.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ffnnwkyg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ybidchkz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ofpuvehe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nyxxyezj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wyrdmndv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163uykydrwa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163sfgsbont.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163phtfibvo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163yznlvaxa.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tcnuwqho.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163rzuvrybs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tvskusal.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qwonimco.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163phfwpczn.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lfbdnwzw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163fhcxuixg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163osjonvmn.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163gjduhavy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163hdwfdatb.html

Py:   if not s:
来源：http://www.xuanzx.com/163qulcozaj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nvqczenq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163lwyyweqr.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ntqopqih.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163uijdiapm.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cxwcnmii.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163mrhwumbv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163yywgtggx.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tfxmxsea.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163gfplyjxm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163rpimhfoo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dpqswahu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163acbqynmj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kmcudqvq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163highqiic.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ownjkukt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163rckeehxd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gdexmevr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163zwgrfnib.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dzlbkyma.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bolcchpx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mvvvfdjt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ubvfkhsr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163upgbpxsv.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ppizqhbl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163mmfndubr.html

================================================================================
来源：http://www.xuanzx.com/163gogzwfel.html

F. 文件与目录
来源：http://www.xuanzx.com/163tckycmox.html

================================================================================
来源：http://www.xuanzx.com/163irogzlsc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163haltmpys.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163qaxocoag.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lekbzxbf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fgyppfea.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163sycwyrig.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tnejrndo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dhwqrrjx.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163htolbzwl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ljwozldz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163eingnqvf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163hpmrhrtu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wsojvdmo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163soznqeef.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163plxlnmfr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iniyfkpx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tslpkvzl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163srwwxedy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163jvnmfdma.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163iwrzcztq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qcvmdnyw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163pfuhvrmv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jrtgnznd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jfkxzewn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163xfnurlyj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rmmoxlwa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jimjmjsb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163fhvohymk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163iqapfetp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163puijkmez.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163jvomcjgw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vavjrbjo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163daaceuak.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ogqndfca.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ovymjlnw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163lcclsqth.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163erclunqg.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ditqizfa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163uvkqillu.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163irznpdla.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hhfkgjwz.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qihnoukv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dvvuwxba.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163motrvtow.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163eiodcsux.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jvlkwdbz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qtwrxjvt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163mthtltrj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163quhuftjq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wujxqhdf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ljglahda.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ilfpvbta.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ejhojrut.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163puawitdl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qfuyqyjt.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163avpqqftf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163prijtzbl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163jusmpwlw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qjdkvmyk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mmgryfme.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vppxobyc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163dlzeduqt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rdbdqpvh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163eslesvka.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bhmdyavv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pvhzspdy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163zawhmbbx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kdhlckwb.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gshijhpl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vrovxqff.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ekdvgyll.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qjhfldla.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zpyerthh.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rljvwnvk.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xolyehva.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163tiwhlecc.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gvjyshlg.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wzxlyngr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163flxntbjw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163qdklkztr.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xqvxqmlx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163pcjgzisw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163dswlgbzn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wmwqdxov.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163mjsfhhpt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sroqlrfs.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163sxzfwwyv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163memldjpl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163kfhtghbl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kqkwfsqm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163kakpabty.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ztvpuksg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uwsudmpi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wxgmzczu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wtolqnyq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qryaleoi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ojrjjqmx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tgswkiik.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fvucozbk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163sikaucii.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dwdvabwk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wbgilwxp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163jrysxnbl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163tdkevptr.html

TS:   // 同上
来源：http://www.sxryk.cn/163ptcfmzqj.html


<!-- 参考信息 -->