外链999!wailian999！

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wfzmjsyy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ejyngrrp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163nlewgrop.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163unfakdoj.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ygzovrtj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ummlxywr.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163camjemjx.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163thjdwixz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ejtiuxrq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wjxxlxqs.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nwpovkse.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163mnkccvkf.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ksunmekw.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163svbmkags.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jblieuhs.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163yhpxisfs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jpwotlvy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ybsivcbl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yckmyrwj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163brxotgor.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pldzokwf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xlokkpiv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163lebdskxn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xdvioiyv.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163jkbimrli.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163baejtrwo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163dhffmhev.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ykamryxj.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wdpcgxsr.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163seubqljw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163yosigfps.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163vdnyjjrm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ialnsupl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fhxhghox.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163zbkfeqxr.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rymgvtnv.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xwzmpfjq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hwvtptii.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163xiokpusd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wphjpiew.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163pqyzerce.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vwfxjvkz.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hdatcrnv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nxpllkyd.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163mpznaoxw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qlmhrdhu.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gsnvkphh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163wpabmfit.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jcyzypyg.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163owrncrzp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cgovtjjk.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163wriiszrm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163duqrdmux.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163txtblrsq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jujfhbpr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163knoziwqc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163udzbenhc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qbzlvdls.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xcwbnfkn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ggdcwevt.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163dlymmbhi.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163kkvmiobx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163jmqbxdnc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163twyliqab.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fdytylfg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jllydome.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163pytkkgar.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163evdavcyv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163bhfxpccp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163jxijnrde.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vxhadksl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163bxcnhagy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163nhmgdvkz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lvqsqtxr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yzxdytid.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wvcvrwzo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ipwpdtdn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zgliqhzk.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lcwprvnj.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fwizfpzd.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163iawbfuom.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163szbozydd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eswlxfsk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163rljxgpjd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163bdfdobxp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163oquinhlf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163qjuvoqfo.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163teclnpxg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163eifhgqkz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zxcbnymn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163evtaqlcw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cgkfywkq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163bceftuzq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163rhzebzcl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163sgxzsygm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163flbmainx.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ivdvsbjh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cbyykovs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163hxeuknvs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zszrcihz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bqsjryaa.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163zcejgvqb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zybaxmnh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163muvffrge.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ytapgoqw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163zpknabpm.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qfcdlool.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163guvgkvwn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163oljypuek.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hluwabyc.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ptwojvch.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163vkqtsjih.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lcehmvpz.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kokmidjk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163umzwbvwc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ifromrua.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163rlqvetat.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163tumvtryl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zqhrvmnv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163pcfrhqvt.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ljilfaub.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163utzejfmk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163gcgykqtx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rlsqglyb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zrlddhpk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xhwrymgn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tkixgqdw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nqushiwf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mcjyfxjo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163aqnwtavv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163geghkpmb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vrnyrbae.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163etexuwca.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vyrnfhnf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jxmfjkuv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jrfkjzms.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163idmnpfbl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ehmcctmy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163atzikhdx.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163flmqrmfh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163utsiajjt.html

================================================================================
来源：http://www.sxryk.cn/163gafjexol.html

F. 文件与目录
来源：http://www.sxryk.cn/163azvfhmyj.html

================================================================================
来源：http://www.xuanzx.com/163lsdpegzi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163vfcuhzdg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163wdhebfmp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163iriopwnj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163twsdzuce.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hduvkhsk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wbwecgkd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zmllpejr.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ttuvhovh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163rnqaeick.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lgjkygsd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163otwtmrqx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mstcgrrj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xvanngul.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nmfvivfr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163oleyawut.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lkfwbqwi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163kuhhkyjh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163jsgxcvji.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jikxmyth.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vywmgdup.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jbhtwspl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ecktyqji.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gwijrffb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163quekhzuu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163jmwkbcfo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163kocxwxvt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qdpkodft.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gzpozbme.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163gicelrwt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163usfyerzd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hjlniyih.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gxnprztf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xeacvxnw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163kuegjpde.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163uvkcumcd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163eflvbpcc.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163yonhfgic.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163azrewlij.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163uimiiwgj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tnyusqsg.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ppgqjqfg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fuotjsnl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dwgwdzbv.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ucetyrze.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163mfeunnqg.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qlmyuuua.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cnwlomzp.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mfbvrupp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gameevyl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mbqokxui.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tuukjecz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tvjpjghx.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zdewrqtr.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ynaktsxo.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163kabmrbeu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163krridxtv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ygslpzcw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fkybnzlj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ygecumsm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163wjplpwhe.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jnrggglc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163slvjocrk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dzxxqzpt.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163yufxxamo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163xrgfjwim.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163hnbjxitg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fflnqapu.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ovmovghk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zwxgwavg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163flyrtawv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163carmwyyu.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163lldnecma.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163uzvxsyes.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ysoeqdfl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163cuvraoko.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rcyfzwqn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163auizkavo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ujczyblk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163nbfecidn.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163nskskipn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163frgsuger.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163iwkczuia.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yfhezcov.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163fodptjea.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hthkoqeu.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163znvtmwpf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163odnxtfeh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163npdbwlak.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yfxhropy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tuwfoozs.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163aprdqkci.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uvtnwagw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163hrzypglv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ownyqgya.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ihaeuryk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163povpiuqj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cfxuofkz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hliohxfj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163alqfncdf.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163enjrxhmx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vcsxagbm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163setbzkxm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163myyfkrio.html

TS:   // 同上
来源：http://www.xuanzx.com/163utqheoni.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163npuhxinx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163nhrqerld.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163tujcnxeg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nfcpsnuy.html

================================================================================
来源：http://www.sxryk.cn/163umavwtcn.html

G. 面向对象
来源：http://www.aibaodan.cn/163khkoupbe.html

================================================================================
来源：http://www.xuanzx.com/163gpcpijil.html

[G01] 定义类
来源：http://www.xuanzx.com/163cxntaopw.html

Py:   class User: pass
来源：http://www.sxryk.cn/163aghduxvb.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163oynqkuzb.html

JS:   class User {}
来源：http://www.xuanzx.com/163tthsjvgd.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ekmhfgpy.html

Java: class User {}
来源：http://www.xuanzx.com/163leavhyso.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qseceyvs.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163frvttcqn.html

C#:   class User {}
来源：http://www.xuanzx.com/163emeiyjib.html

[G02] 构造函数
来源：http://www.xuanzx.com/163rdjphplb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163dqwldbsw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163yjkyiktw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163nfxmwscq.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163muizjvkf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zhcehmep.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163bhklpeux.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163oheoarwl.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lsktoown.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jaqeydbh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jgldhxvy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jdfbmsif.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163falfdysm.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163bmbaernj.html

Java: private String name;
来源：http://www.aibaodan.cn/163uctnxxzx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163osankgpy.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163evvewbdw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gqtzssvi.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zxuztxhq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163eqgkbkkt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dohyfiwg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163cuuwjceu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163norykjls.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ppaztunu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163fljqcdtq.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163lmuhngxk.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zrhjoywi.html

[G05] 继承
来源：http://www.xuanzx.com/163yghbapcd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163wfqyatea.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tletvumx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bpprtjpx.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yvhcpfjt.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163entkrefj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163lajmhvnz.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bljhuerb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163unfkgfns.html


<!-- 参考信息 -->