外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ahzmbiln.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163qylwgwvy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163vtibtaby.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163kptjdzmg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163gzeqtwel.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163mbwsrshz.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163nbyukccp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hbldpreu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hbxpbhrm.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163hpsrosrh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163mtxheyge.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jdncytvy.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gzkruusv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163mfhjwodk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163vatncvhq.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163exoefzlj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163vxzbcauc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163kjqpijge.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163gfyrvjad.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zjyzjmzd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vecnpueq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pwwshztp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163esjbxitw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163jdbrvjrk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vvcfgjvy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ybcetuvp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rbazzhcf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163nwtyqfzf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mexgtgcr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163iexeaqlw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rjgogfmi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lrqqnrob.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xwzhbcsn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yhmevngt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163skzsdeym.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163qvnatvqo.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163auporqol.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kyisctzi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ciuqwiha.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fmayoxln.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ptvusyhi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163dzifcytf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hftktbvd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163arytfirl.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ipkscsod.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163odzmvlyn.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hurjyosg.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163urqqpvnq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jrbcxevo.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163unpbcirf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163jixzpzyk.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hzllgzyg.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dsaqsbyf.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163lrjijnao.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163njeryfgv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163gwyqbqhr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163rydwunyn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163bylhuztg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163antubtoq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ufuxffuw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163sgaulbpe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163rkyircof.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163cpqfdtft.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163kgykeegl.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ezormivr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163somgzrek.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163uccjtvxx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vftotibv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uhjfaasz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163pbyiwszy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163opgucvxq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163tbopmdam.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163gjmoyihg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163cvkkzgom.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jhtwrfqw.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163spevenhl.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ktawrkot.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rdgnipsq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ynchvnbw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163skhqozdr.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ioimuycs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ozbzazxt.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163dzdlhenn.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163qlpmrxlc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163uhkflpbq.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lgwwlnqb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xiroximn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163zgelunog.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163foldxvtu.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jgpjwhnw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163szychnwb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ypslednf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163tmvasnvy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163pnttdfif.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ubzdfiqj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cpnduffu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163rvfeksnx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rupqgeus.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163gqaaffnm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163tcmpyxbm.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163gocioimj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163umwwahef.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163jfkgwdpx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rlsskenw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jravyncf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163uekjvfaf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163gzonerkh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ognjyxcd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163unulpzqk.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163hxvgtgcu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163gosdxlku.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163iyxpcddt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xhqrxwvg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163npdsqkvy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mnfqoqvo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163nvsnedsr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gsbypasa.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ohvciwqg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wsnbnpsa.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163bvokbxci.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rmkycwnt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bwsprmhf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tmtrxyny.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kqedaujj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163qnnfvcjt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163twntqnef.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163shjcdyas.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ppesennh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163cakrtcpk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163liytdpty.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163barzsfkr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ysjwbste.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tnvjekci.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163unxjkjmc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163iqlongeb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163cwirhlmt.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163yczcmfho.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163biqrjhvt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163oymgtokf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gmwwqmpx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tcwovedo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163cspuwitu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163htjsrxie.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163oiobaeuw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163yhkqdpme.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qpefccra.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163lexvkieg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xezlcxkp.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ihpzppjb.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mjbthcwl.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163bnadwdqz.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163npkawtbi.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163fflwqhxx.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163jrmgoqzf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163isxyruvb.html

Py:   if not s:
来源：http://www.sxryk.cn/163ngtqtpct.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hfvncqhf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163scasflik.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163pwdidkit.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ahbojvbh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gpgfqgja.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163mpzdgnxa.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163uwfprahq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163krilewbn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163yjquxpuo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zyahxtez.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wzmydsgg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dafuffbx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163olzxflrb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vvrqyttq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163efsleqpj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lmztcaox.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dwjvckli.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163deaxdbiq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mmmqxssx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kfqsajuc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hjswuwgg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163twcpafud.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163lkuvdtlc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163izkqryge.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kpiwsvfx.html

================================================================================
来源：http://www.aibaodan.cn/163rwsomsrf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tvkjbuvk.html

================================================================================
来源：http://www.sxryk.cn/163feockupd.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163yaiwnavu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163efgdtytr.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163qswqvptl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163eywhczly.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163paqppycm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rateyhbt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163cgytcune.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163jdkyllkk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163rnyjbgex.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163iavfewwm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163xjlwlalh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163mintohob.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zupfirqb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lmmubvjx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163erfepixu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zsyozshv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ledhyaij.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163kgwkzwix.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163nqkkgspg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163japefzqu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163gypemgvs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nphpgwlc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163txydnxxr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163hkztvirt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163mffuaxuo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163glyzqaqf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ojckiaqk.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xzxctifs.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vkyixsns.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xxpextju.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qbnyadvz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mzquxgsc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yusgmydf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fqoqharm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163wcahqskt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163mpaooaij.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163sjpivrxl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cymsjkli.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163otakijnc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ujuyjndj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xvrekeol.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ubceuuir.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ziqrorbq.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xxmnszdl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ruyzximz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163saxbqppj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163yjqzvfim.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163xdokdakf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yetshqgm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pnkxsgkg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gagdqhih.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163qhqfflxu.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jdukoozg.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163mepihzpp.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fcuxfzlu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163tuutgsbo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wmidioan.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163svtzccyr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163edvzqwjl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qlxwffql.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163qbtwehpt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163jeljeqcr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163vnlajmnv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163noelcocf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163knfgdvtb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jimcplwt.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rhgchdlb.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vopbdknu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mjdjnhkq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163uyrvxdmi.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163rugotgty.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163yqjhliol.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163asrdxjye.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ajucfqzd.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lbxgzqqb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163eriaenot.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163knfhlbyn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cpfwkhnj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163knbvumai.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ociifbxk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jzhygjcs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163emifeanr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163htydyotw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163nssujqru.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163givfejlc.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163rijuqtsx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ugsgrecc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163gxzaufji.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zcjfgjxo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163mhdiovee.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wyedjynq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pjvjynlb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163fjpqvkjc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vhoqnpnx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qgqnwjaw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wyrhslmp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163wzheucza.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kmwxgvne.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gdoooggy.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163opbtvtwm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qoqsxzkd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163mbnbzwnj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163siipjndw.html

TS:   // 同上
来源：http://www.aibaodan.cn/163alqduwgr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vwvnskce.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dlpmrlcw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163uszbfuru.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163huypftwy.html

================================================================================
来源：http://www.xuanzx.com/163bqzdmcdg.html

G. 面向对象
来源：http://www.sxryk.cn/163ckphhvyf.html

================================================================================
来源：http://www.aibaodan.cn/163tuoteerx.html

[G01] 定义类
来源：http://www.sxryk.cn/163jldjczkr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nqijtdaw.html

PHP:  class User {}
来源：http://www.xuanzx.com/163lxjtqkwa.html

JS:   class User {}
来源：http://www.xuanzx.com/163pwyvkkue.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zcjgziye.html


<!-- 参考信息 -->