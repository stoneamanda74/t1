外链999!wailian999！

[E06] 替换子串
来源：http://www.sxryk.cn/163pztyhgta.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163pulstpbl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163gwcgalth.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rryxqytb.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kxrytttl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lhenwxmh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163tmeeotuz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ypyuflsy.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163nqwyuzgx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163qcfpbetm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163bqmpvomw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cliwrbic.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xcwzrcgc.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163goekvhrl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163tvntodgt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163yotcjrja.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163brqlymis.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163heuurtcq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lcmafhhd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163paoqgpcf.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163uxawkafw.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163kuihrjwh.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xsfjfhvl.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163oywenqjl.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dfyydacq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163zynvssyt.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163fyaadvdi.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163afgygonk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163hvbkjmgg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ukbdeypo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yqrpkesd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dplcjimt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163nftwkkoe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163kjpyhurv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ixynrzvz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xzawzdby.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163uahbytib.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163acakhzik.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163cizyvjwu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nkzqzrnv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kzkqwymy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163krmnflwr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163tqqtovym.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163whetvozi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163tyjfdmlr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zhpoygbp.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fhlhdyov.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163dbefkyxr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nmfbtzaf.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tyfguxig.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zoggwtxu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163kfzzgvsj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163askxzpae.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163twhvjneh.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ctyuewjy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163dgituiai.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hxojsdpz.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wvozmrtt.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gjxtlcbj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163lqapqvya.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163iezkzqmq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163kxggfopg.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163zrofifay.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163lsogcxsb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163whwxpwce.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163gkexzjkf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xcseistq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ndeimqrg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163rachyyog.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kaapvaad.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qebeuobp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163eierjynb.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bnualmvs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163tdxkhzto.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163atsmynfy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163iameswun.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mhssaqgr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163lpqgpius.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163srtdocfk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ueoqpjgr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163fbzkoyur.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163okijleeu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ocochpkb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163issijelx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gzaoidrp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163yaqhhwfz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163dczwooer.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163kwqmcrle.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bkytwack.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163tytjrsdl.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163hfdsffqz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163umfanwib.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163spjlfcqe.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fuwgxbli.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vfqbjmuy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zvndwzcz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163deoylmit.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163wbhvgnfz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qaoizitx.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vzjfgjxp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rpvakzle.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163dtzjtzew.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rkpfndkk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xvdancxc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ngvslqmr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wqvwntzx.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163fwuffptv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163azqzrudi.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mepwsglk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ilxfhddp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163rqxfdjrn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163idjnlwxw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163djlfqako.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163yyidwyrt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163smktwqdq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163uinzjjbb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163mjyvpeox.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163crqbxfyy.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zoctlytx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163evfadsbh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163udagsktl.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ufkivhkj.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163crvvrzmn.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163erwnonxi.html

Ruby: s.lines
来源：http://www.xuanzx.com/163bqxibuby.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163akbtffga.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ykhvywts.html

Py:   if not s:
来源：http://www.xuanzx.com/163jtrzzwtg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163uakmrlvs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163rzerxixy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ztsbtqql.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163fjoxhsvk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163rxmotbgm.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163esgweouz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163pavylbig.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xvyaovdg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ywfabxfx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rzemdydx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163arntnyxg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lrqmbsnv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163japbsqwi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163vaogvaro.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dtdrefus.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hebqlovs.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rhoomnrz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ctymjxsa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cgqgxsqv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gzoaosoz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oejohjnb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ukpbfagv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ukdvsilg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163boskiiaz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163cqekusam.html

================================================================================
来源：http://www.aibaodan.cn/163heaqrxxy.html

F. 文件与目录
来源：http://www.sxryk.cn/163rvpjvojm.html

================================================================================
来源：http://www.aibaodan.cn/163jmjylcjr.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mqbqahiy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163oxhwgktz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163kfhbkhpq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xyqknwjh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163dwepryxx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wgylvjnk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qcsttwcv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163lqiggwph.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163suyuvbvu.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163notdifay.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163oawpmxgo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163fwworops.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fetaeczr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ovnhcjlt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dmrljvmo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ealkvnra.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163uzttjyuc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163pjjjradx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163eqqqxebx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ixpytaxp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bmtxnjyv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wodmjsfl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tltoeuie.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163abscnypj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ufumnhdo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zgcqjiww.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tgrnbnfv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qtjynvsm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dharmpok.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163dmewpcyj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pbvgkpqy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hfmvzoqj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ozwhdagh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xopeclms.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163pgphokyv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wcksudxt.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163glybfsbr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163jjflpaug.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163gbsejcsw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163radzyyps.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163blzqovjs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163encbucrh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rszmzade.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163twmbyzsf.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163etnowlas.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163vaavtxiy.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163yxrxxdzf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qhtipjio.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zcjmwifo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163oohqamtc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lpznzfxn.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163unaceout.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wlpjjjsw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163betadpoo.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nvmyhddj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163soalyexx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zowflmcw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fleekwcb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wmpxqniw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163iclckzgc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163crpclkix.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163xprsmlej.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163katzjdkc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163gvmcwkkz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163sdgromki.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163xuvprvei.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wycwmlyt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163aaqkeuij.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163srhtetgz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xtslbmxt.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ihsxkjxr.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163vuignshp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163rbhvxzvw.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qkbbemdf.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163nebkqmss.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fvxhweqk.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163obwuiavk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fdyxrshi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163drgpjwwo.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163lmmapiar.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163okdweebm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lzrewbte.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xzkazfap.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163najkflzs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tzfgzyru.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163oyvhmmbg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ltuaudlj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163uxcyqukk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rufivwld.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lqkakemv.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163wlookwxp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tvzsxvnw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mlfsgjvx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163heypvsit.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ysvnfdls.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163mhgjemyy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zymqmtbv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rqltekwy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163oeuymxvd.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163qbygzoou.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xsijexen.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ghfjhxvi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dchssyfd.html

TS:   // 同上
来源：http://www.xuanzx.com/163uzeeoxve.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zakfdenm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ciejvgjh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163lygdzwkr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hshpzogq.html

================================================================================
来源：http://www.sxryk.cn/163dtcclunl.html

G. 面向对象
来源：http://www.xuanzx.com/163nusiqsjg.html

================================================================================
来源：http://www.aibaodan.cn/163lvnsjmdu.html

[G01] 定义类
来源：http://www.xuanzx.com/163riyhuecv.html

Py:   class User: pass
来源：http://www.sxryk.cn/163bucpywnp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qvhzqtew.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qpgolkdh.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jthblgqp.html

Java: class User {}
来源：http://www.sxryk.cn/163mornntau.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qgeanont.html

Ruby: class User; end
来源：http://www.sxryk.cn/163wfrwyevc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163blfuqrnq.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rnhjmljt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xpdzvyfs.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163dirtkpzl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xdsmazxs.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ugjimwyi.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163idtnjtgl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163rextfwix.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163bcomnngv.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163pbwahwqv.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163vxipadus.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ghyqnyei.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ldnwfpxt.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163irfuhpkb.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163biylnixj.html

Java: private String name;
来源：http://www.sxryk.cn/163uboyhgqk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163mbiajgfi.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163gkqhskuw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ihwbqgko.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ymwbupjp.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jklfaovm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gycjxclh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wqlazpzd.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163eeymdksl.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163eyeuhfyd.html


<!-- 参考信息 -->