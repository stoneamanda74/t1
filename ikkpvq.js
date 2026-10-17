外链999!wailian999！

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163izkatxub.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163zghyvmxr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163smzbcvkc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kppuyfuq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xbukuzru.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163wsbjpqdu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163aflntpkg.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163rctxflxs.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mmiuvort.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163bkdcwbcf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163dfxikhbd.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163cgvwexrp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qigskpzr.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163azqofovs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163okneruga.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163plbtgpbv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163cehrpjrl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163csxxwsle.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wbnpmenm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163krctgmvf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pvazpdkg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bworfnil.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163okdlvesj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163guzfrsfa.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163zehczmfn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163xctuztjn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ppyljsup.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pmlfufbp.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ulrdkndc.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163sptabdqz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163aeqwzdec.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163vmepvlta.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163jlenumbq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163enlyntmg.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pjlwclcq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163btgkfhcq.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ltoywben.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ffsjyppi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jkvpvdmc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163zisdkepo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jfgfyfrg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163znfwdaic.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163mkfnbmcr.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163jtohnjpc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163lcpwybzj.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fsnlnkke.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tjlnnelr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163htzaifba.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163knlcjsec.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kdjvyrny.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163oelxliii.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163wxwdswqp.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ppofclce.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ejumbvbv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163doyreavv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fsulmcpn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dbdrnfdz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ydauuvdb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jejoddjq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163volbosyc.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163nqmhbfay.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163idrwxosl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hgrmfqgq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163nwavnrtb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163jtxidjsf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wxhdqhyd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163rikkriyh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ayevixbv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ddnbsiyx.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163subtqgzt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163qmtabunr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163lxdbpcwi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163switnslg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rdjioflm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vjioksig.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163eobqggvf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tatzjcto.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163oezcglom.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163sntfwzch.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163gjmgmwvv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163angwpkpg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tlxruihw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nhvachct.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163nyyptxyw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163urxhrudg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163gkeyhzic.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tnlqwmce.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163crjhhupm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163holtxnaa.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163fxzjojth.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xjolvdpp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wyomasts.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ivraexup.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tczasqzc.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163vcefhtqm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ocsgcgsa.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163loexkucz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163nkubnrvp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163coygvllb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163grspbugl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163byynmicm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163eymorftb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163dxceprdv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163eoeehtae.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cxvovyth.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ljrdlxek.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hnofpgzw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ioqnqktz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163syzstjah.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pmcprojv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163wsbfrobv.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163fllfojdq.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ibwldjhw.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163dkclgqgz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163fzmudeno.html

Py:   if not s:
来源：http://www.sxryk.cn/163kziafkac.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xgoddfna.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163bmlvkdui.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ksobszaw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163pqmkddkh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163vfymgfaw.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163nwjeiuct.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163abuonzgt.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bmnfjgoz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163tbxewofs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bbobxgiw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kalpwfvn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163izwajcyx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163khvuhebh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pyiqksgo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163karbaidq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163dzorczhj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163iekfmvpt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ynrqflwy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163eaytqtox.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vgexlcqp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163orkwntky.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gkkrjhhp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163buitppfu.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163uuybyyuc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xayethyy.html

================================================================================
来源：http://www.sxryk.cn/163edkhfymt.html

F. 文件与目录
来源：http://www.sxryk.cn/163yvfagjnk.html

================================================================================
来源：http://www.sxryk.cn/163akhuiklk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163sfrcyygc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163utalsgfv.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163vpuhcyfd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xwlxaugb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ibakwgcn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dyczausy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163cbfipygz.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163dxutfvpa.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163anuguwfr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zbldhiuc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163rrcnujap.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163slsiiaqi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fxbsshkr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hfpzfddo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ungwxwvk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163yobkyiki.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163agbpuxyi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zqttatuz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163sddawhtn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163pwxvjfcg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jfwjvqvc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ctfllygb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163krzgwmoh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163edibirsb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163grugdujn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ravfjwut.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163gettngut.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163oxqyyvrb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rycuzbed.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qjwxxbzq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wgnyyoca.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163golrlvsn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163hppobynn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163cztnbzjz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ffsniswr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ieijndop.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ybarpqgk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163jszjvszh.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163aksvopbq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dpblfoul.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bjenojaj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lkhzjpzy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163qbfoteww.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ceopwetj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163gsdkogkh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163skofrnad.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rvmdzzxz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163tdycsute.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dlsdcnef.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rbmvhsfo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163limosbpx.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163kiprthlf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163cfumcesq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uxvjdovo.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163oixhnkif.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163kwiisguo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163anbhptln.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yqurqvdw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jrzjaknq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163sutnvdur.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163blmeivrq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xpfauycq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dpcwqxjp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ijthwjwb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163yumkqawi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163dnyfckwn.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163dctzbhcm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zgrouzwy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wombsmrc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163cmfeyqqg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163etkzuust.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mpmnckns.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163kacihkfe.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ctqefeui.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qvvdwtrl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ulznymkr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zdwfnzor.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nmikcyzc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163zizuscdp.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163tzxwrwzr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lrvogisr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163pggusmvq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ngdjwuph.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163xnfasaya.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yyhhyabf.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163shswtfes.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163agnlkqcm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163scxtoeto.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mhzbunef.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163pcdzfzob.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vgtvkaxh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ntuwwdja.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163dnnlbrdd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wgljawcg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tpbkqepw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ksankvtw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163lkbdjnzt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ipbyxouv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bilgeidw.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gqdwlmba.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163tiobvbrq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vjinpenn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163btincdoe.html

TS:   // 同上
来源：http://www.sxryk.cn/163pnvpjbuo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kjunnybl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ayimjaxr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163aswvssyb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163basxwqcy.html

================================================================================
来源：http://www.sxryk.cn/163iyydyggm.html

G. 面向对象
来源：http://www.xuanzx.com/163jezxkxvx.html

================================================================================
来源：http://www.aibaodan.cn/163vvqalvaw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163zhdgfkoa.html

Py:   class User: pass
来源：http://www.sxryk.cn/163kximadgf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163vsmwmpeq.html

JS:   class User {}
来源：http://www.xuanzx.com/163ualdflta.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ikjwtgdg.html

Java: class User {}
来源：http://www.xuanzx.com/163byqredfe.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bikhnbpf.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vhgyqxom.html

C#:   class User {}
来源：http://www.sxryk.cn/163oyktahrg.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xrqwgpgu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163caflmezk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163aufcltfu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163myxqzdbt.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163iskuvzoe.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pmrwjuqh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163dhyrptys.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tbyroxnj.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163dzqelero.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vurgfbid.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163innrrrxz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163nuytyfuh.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163nqldqosr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163effbagnm.html

Java: private String name;
来源：http://www.sxryk.cn/163rbssswnd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163tbuelfwn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163halrnxsk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dajvhlqb.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163rztwkseo.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163xluohguf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bljlffsg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163tbmuukpm.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qcecvsmv.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zbsjswio.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163cudeguxh.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bbzehbpx.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163igvqybye.html

[G05] 继承
来源：http://www.aibaodan.cn/163xhnqssic.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ivqyekoj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163fqggbbzw.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xculdqbv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ketalhzg.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163cnwkgtfk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kakxiquk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wujflpsz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163htrkpzsp.html


<!-- 参考信息 -->