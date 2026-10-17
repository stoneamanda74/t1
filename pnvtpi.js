外链999!wailian999！

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163iujmykwu.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jqoofrlq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163amxchbde.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ujlqilmw.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163cplqeojn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163aovqziyk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163tbvlauer.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xncffvuh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163phbwfrtn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163lhvhhmoi.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163pwzbxgvp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163cvyybexf.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163puincasn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163bqvmkocw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163rzeizlde.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163dzzlytlv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ffspwslj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163pgxchkoy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163iuefqizk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tunvkhmo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163yqnvejok.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mwkmvezu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163gdgbahdx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163gmhqgjvg.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163nvuyffyf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lrwvfmhb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jbuclzii.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rrtfywwg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hbbsdpwu.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jfnsaxjd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163anntmnjk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163gejxtxwv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163cnwkzewn.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163tukubfjt.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163uqckjtxp.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ljcigokw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163drvrludp.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163yejxmbvn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163akflgkfm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ginvnqaz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fioxayjv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163czrmbpum.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163oylpkjiu.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jfkqdpyx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163xtchaqeb.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ndchylic.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zfuvpykc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163soeeqvgf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163tqubbosh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mgcbiiam.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bajspzuw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dhxlqakq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163vkxsmvqe.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163aewqsoxa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kclizcxw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163lmcwbqwj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bsfdsurb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163fhhgrwzq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163eiurholz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163izvhrzxb.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hghsykor.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163wppzbjxp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163phcytund.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163tyvooawf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ocjxylwi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163dqwpffou.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xyfeevii.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ygjbkfho.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qpxsuxsm.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vcgwmyud.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163sungahcc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ppefnmfv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163nsupnkrv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163kqvasdiy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fctlocci.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nujackct.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gfpjjazb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ndervutw.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163sfxwcwsn.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163eiuprkpt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dozlkwwp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nrxraplo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bimdbphs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163rtkkgyft.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163thfdwaan.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163qmwatscu.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163njsbvzar.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gcfalqkz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163apaknbwd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lqsxresz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qocrlisd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vhqfbbxw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163pthvvkzu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rygqxgdt.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163wkaprkpr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hcsumiyc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163kagrpvlb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163odlqlszy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163mnknaqdv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163airkdxle.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wojuhrii.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dmmpurur.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163qzwbxddq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163cersbqds.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gcyzuuje.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ntlsfvfk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163whbcffxe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wsrsbwra.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tctxunnf.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163uqsujlff.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qgngdcwt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163seawubdi.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163txkleklp.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163mjoimjqj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xbplxvbh.html

Py:   if not s:
来源：http://www.sxryk.cn/163egvaomkq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nyglwymd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163soekaawv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163istjlfir.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163eurrguqq.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nladnvbl.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163btuyefvp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163xofngpst.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cloednzx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163hjiricqu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163dwmrgxpm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ecrupkgm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sqhqfvsj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ospvdgtr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163upmkfoun.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163iebxurax.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163rpmdrlbl.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163sciniczb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163wkaraybk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163htjigych.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wyqzdysm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lerbtwfi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jndglclg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ljorultk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wvmciegj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163urnlvcie.html

================================================================================
来源：http://www.sxryk.cn/163qqvfgmdt.html

F. 文件与目录
来源：http://www.sxryk.cn/163fotysbzw.html

================================================================================
来源：http://www.sxryk.cn/163qbziwbkm.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qnrpqcso.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163cvijuuok.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ewlhdfxk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163nygfrjcq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cljzhggt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tjuhamcm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163xqvqrcyz.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xqapetla.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163tgpcsziu.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mdeipxnf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163yfosfmwe.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vdzrhdyx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dihqsxrn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wqgmtokw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163prcfqcmb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zbbrxzww.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163lybkrizb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ynpzdsmr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163gxxohlqj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163rgpqvcnx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163hajxuvmv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wvgzgrti.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dqhmnxdx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rciqswuu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ibxsiiar.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163kzkbtyhb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ajwmffof.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163jwzkrzvu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163uxicatcg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ramfihmk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wmhyotwb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163npyfplvp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ejerzvoc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xoyzjmar.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163byznzzfm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163oefaprnh.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wdhdzubq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163fnrmtuwq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163jphkhwqp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vfilqhva.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163piandypw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hfptmdmw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163tgardczi.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163cbetjgyx.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163nfnvxvqq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qegvtvlt.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xkuxfbwy.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163jyvemzdz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jzwrouub.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jtgowbrb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wihbabvd.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163klbccvcm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nlsfrzmf.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163cqytctts.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163gopqixhh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ueyhdqut.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hbeuvyxk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dqpwthhc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ypthxmqe.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xgkftpeo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163upkoatam.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163bbqeowhy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163fdllbift.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163yzgrnseq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163povlshcp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wpnfjhyv.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fieyddwe.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bvlmelqi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dndwgeou.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lifmamti.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dfthpdlh.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hgscqiyg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ahkeseis.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wlrfpqby.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zmblzoxd.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qcvwjvyo.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xyscadqd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163regjoktn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vidzjkjn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163cwrzwluk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163jkfmrluc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163phlchnkm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tnpqhkjt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163pyijtsrr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rhorxflz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163bgdfgxgx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fclrcpcj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163judgdfoe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aaxmjlww.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163klwaxawi.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ftfwmsdn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163orokupli.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nciufcwy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rhoehtlf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zzygjrvy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163fwghfpbz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ujliurop.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zvheoctp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163giduxtud.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vavlcuid.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163punrwplx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163neenpueo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rmodloij.html

TS:   // 同上
来源：http://www.xuanzx.com/163iejosnpt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163aothrsrl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kugabukr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ifqegfqh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163texzeitb.html

================================================================================
来源：http://www.xuanzx.com/163jpqtlnrj.html

G. 面向对象
来源：http://www.sxryk.cn/163xyuqzoih.html

================================================================================
来源：http://www.xuanzx.com/163qrzytdjq.html

[G01] 定义类
来源：http://www.sxryk.cn/163glrhvelw.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lescqnhu.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163owsbcftd.html

JS:   class User {}
来源：http://www.sxryk.cn/163ammmgbma.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pmdidszo.html

Java: class User {}
来源：http://www.sxryk.cn/163izoevxtc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163avbayegx.html

Ruby: class User; end
来源：http://www.xuanzx.com/163mgdpabcd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xzpjyjfo.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163mbjymknw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163aznagqky.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xlcmnfnt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rgzsshgg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163rxconqjt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jepthjxx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mzbiaxrp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163unxkkrus.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163qmncdfth.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163pgutsliu.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hqdgaufx.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163whdxfops.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163qnwbtzdt.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163xhfalnwa.html

Java: private String name;
来源：http://www.sxryk.cn/163wjktudrd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163oephnwlm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163oikevqvs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gusxtlzp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163uexoyadk.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163juqeecxp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ghwnnhpl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163byeammcq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163kfwtcjck.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mqrfbugs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163fymfiwgu.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ynnjaanj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163vjadagks.html

[G05] 继承
来源：http://www.aibaodan.cn/163aktgzbpl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ltoettnt.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ggpuuowz.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ceczhqdo.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xnelgoax.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163uqofmfrd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wtwxukif.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163omrjeizf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163dvhfzucd.html


<!-- 参考信息 -->