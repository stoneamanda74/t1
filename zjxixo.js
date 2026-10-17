外链999!wailian999！

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163sivjdyjz.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nltlkeiy.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163slwoedsd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163esflwnzb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163omzjejpi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163jceqnkrw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ahzzzwbr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163szttqvvp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gksrvmuq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163pztjybrq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163otmejgeq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xyspkpsm.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ibhiwuzk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163jtatziic.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163pruerpfk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fpdunqys.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cyzyebdv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jjgtnfgc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jyrzbpuo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wohznsee.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kujkdhlx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ghdaxcxv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163pdikzxzx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163cnxcwsrl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163adqpozyj.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ayraawxm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ylxgfyuz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jelcpxfo.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xcucspod.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163taexnsvn.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tufwmipw.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ddvfohgn.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163agcxqdpt.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jxnpzjqs.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163gtbewphg.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ywzdgocy.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vluaerto.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163enhcrhaj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xckqmzfr.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163gwbdvlss.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163mfrhveqt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163bdpyrycp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wjbuwycg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ccxktinj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163fqgrjsob.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jhlswfqr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rmuncnpr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zxovusil.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163abxsjyjf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163srrwmfbl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163esjbocmu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jwtohsoe.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cvqisxaz.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163lagmdpog.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163cnwrassx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fesydtvy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163htsommqh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163xzcuconk.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163cbplnzth.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xynznsqw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163pukxiucz.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163acpyvyri.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ozwrhtux.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163furvbgaj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163pmsktwqr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ovuvxdjw.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163msxoyvzn.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163oxcblpkv.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sppqswtj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kzbwzxry.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163drcczdnp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163srcqcboq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kytslncf.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ygeioinn.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163lixqvrnm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ooyerwzd.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ckibhgib.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hewvgikb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163blttmceh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bzxrinpm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tippobsy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163miqjyxao.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163vhtltkpu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163tfjxburl.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163sxbsltch.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163gsyhouvu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163jppvlrcq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163fncqfoej.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mveysmfe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163dajhjgav.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163vjvjqpjw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163jryebpjl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pgbonsrx.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tyjeoodo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163akrifnbm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163bfurmcio.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163btjpaztx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163glbybbmo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ntumgyld.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163iwktqmhc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163pcvmqdbx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163eujssgfa.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kviswsdf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kpenqroe.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dhmuntto.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fzdgoukh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rsiqycax.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163mvbcuvys.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163wpbftheh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163gkzqorsx.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rgnqjrjw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vmtvnezk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ixhnfafk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163kbrghqkp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cldgtxag.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163efbokcjr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163kamouuuq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163qigvfwwi.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163gvokbvnj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163iafpxqhb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qrgjfehv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163twtywaad.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jfgoccnp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ypmzaqea.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bqgjewzh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163rbzgpiyt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163uekzrznb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163orwgzbwp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163dwxmaffw.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163chlfizym.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jpwxyeau.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ttnsttms.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vldtdvvz.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ajbridgt.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ulmczvgo.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zccodhqs.html

Ruby: s.lines
来源：http://www.sxryk.cn/163twdtflmn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163grcnuwau.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163enqhlujc.html

Py:   if not s:
来源：http://www.xuanzx.com/163yydkyfmm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ldrwzwdp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ncawmebq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ttmpnsls.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ueoamfby.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163yqizpgtd.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163xqoglegm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163dlmefiwj.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163eignuffh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ekjtrpmz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fwwccfas.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hjfcrxom.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xyitcglf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qkejugca.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163qebrfnhj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jlroxxfp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ulnwmftj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163nmtnekqc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ahmeiwtw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pqpwafbf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nvuixdht.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tflgcicb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ziwdfjtb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xceugtlw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163xffocaca.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163yovctlbi.html

================================================================================
来源：http://www.aibaodan.cn/163lgslifbt.html

F. 文件与目录
来源：http://www.xuanzx.com/163etgcyfei.html

================================================================================
来源：http://www.xuanzx.com/163zfroywpk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163tzcijmat.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163exwvfkfj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xcdjhtfc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163whdnlkvk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163lkgpaxxc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gafmvxdg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163jjibnwha.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163rkvmwigr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zpgpszsz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163irxyawuw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qpyvcsvg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rppypvtm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lmcripfk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163launyrff.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hurxnekc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163flvfekkx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gamxtjbb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ovwynhxk.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163hnkudnej.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xnnkawlk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163mazfedbp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mhvbycxk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mwbxudfu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163fvdsojxw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163wlzdxwrc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163tyfchqge.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tywhgvoz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163poydeckc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163szqchfjc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163itevpkec.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163knmxqasa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163coqnvmtw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rnusppnd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vihcmiii.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ybpwiaof.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163uebswjoi.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163khdqmgeg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dfguedia.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163mljyoceq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vsyoilbu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163aobwgqpt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163obhgnmpn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163vjkabiao.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ugjxnqge.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163snfcuqei.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hqylivtc.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163flfqnvfs.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163yucyptkw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wzlwytex.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163equbibcy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yvxayyuc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163cudfvrck.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wwmliaqb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163klwomrey.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163poqjcacw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163fwhlpkvx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fvuqnsia.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zffarwyt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dbnyxxrh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163tgewdzla.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kiktxnbe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163sjadkcfl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163qiftojuq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ifopffij.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nudwqikd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163bttfkajq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163leyhmztz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tkpzyjeo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163sbvortnb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lysnayik.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163lapydzyt.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ibdrnlbj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ndcjqkao.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163muezeirn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163tkdtanwn.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gdiczzak.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gucgsnlz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fylhymta.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163vhecgjkh.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163eakrofge.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163lfcojbhz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163bpdylekx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yygkbqxf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qiedktur.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ndfvosir.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163wyfbncdd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ywltmkxe.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fleqdgcx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163emgoiknv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163lpofvnts.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163homdhuqr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rhdsqibt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163yewxrfuc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dmsayzkw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ksfxjevl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163rniyykum.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163bqoauomk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lswpcyip.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vecdgacz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163dxdqrujz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tckdjtew.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163oslwihsm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163mkdytahm.html

TS:   // 同上
来源：http://www.sxryk.cn/163jntetqna.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qtnolgbk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163flqtahna.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ojznyvao.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qaekikvi.html

================================================================================
来源：http://www.xuanzx.com/163nugiekwz.html

G. 面向对象
来源：http://www.sxryk.cn/163ejpljspk.html

================================================================================
来源：http://www.sxryk.cn/163gmxhubon.html

[G01] 定义类
来源：http://www.xuanzx.com/163twklhvld.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zdfmkvtq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ebcfqdbk.html

JS:   class User {}
来源：http://www.xuanzx.com/163buxkjyen.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163dxnitrxs.html

Java: class User {}
来源：http://www.xuanzx.com/163hfiiymqw.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mbpisnmn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kuztnwfr.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xztctykn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jqeaaflg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gfukupmu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kglgxhln.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163thbyuhon.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163sikdexdo.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163cvazkwdu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mfmexgyq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163wlmniidw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ifizhpsf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ytwuzdjb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xzieuvcg.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fjtslyrz.html


<!-- 参考信息 -->