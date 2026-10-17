外链999!wailian999！

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163uvvkxzdo.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163zunzmtyz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hcximszy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zleffpvp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163uyzifkfu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163oltskfle.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eunkxpue.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jmyicffi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kkffurkf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jeomuduv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ppmhzxjz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ucwdjrcc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163watwmolq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xkdrdydz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163micmukyr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bywluori.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kwoirmdc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ifbqqzvj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xtehrhee.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ikaeqcuz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qtlwarsw.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163sshmrpgb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163nikoiffk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cvmkdxpo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163smfmmtvd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163afnuqbni.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163rkcarrer.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ujeojkar.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163mgjphuzr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163wwyhljha.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163cfoogfal.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163heofarln.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163gouvvgkm.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163zpiwwcyx.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ayagvsxp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163aknwqsfr.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163dpvvmimj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qgrhhxke.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163cwxkntgt.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lbxxgeil.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163plwngqja.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163innsepsd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163blyqykjn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tcprijgj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163enqqvkil.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163mnexkmvx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163datvtxny.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163gazkbjgi.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bsjrpght.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wxajikas.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163wqmaqkzc.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ofxbpkdi.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yyipjgbz.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pntzoyml.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163uozzbjis.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163zplzrerb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bbqqhqwu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lquxptyr.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163lcppkoht.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163isxcvecb.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iijfidne.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dmlzypnd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rtyqnbji.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kbemtgbg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163lfwcvkkx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nvhxkmby.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xjcjxsne.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163chezisgx.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163enbxlpsp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rostxdxr.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163diktktkg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ocnymnfh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163iuljnxxy.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tnseekwz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163drmiygnl.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ltnnzcex.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163tqfryquw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163iplsczqy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hlsesxnj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mmhlwbxb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163mjjyufxh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163rctzkvls.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163jtgkspdh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jqncdobs.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jtvcmkab.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163gmzfoeln.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vzlvpmvi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163rsckrzcs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ccxgiiwd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xttgodee.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163jnawopkg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xnojfaqa.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163asbswebv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163iskfkoye.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163csbnqyik.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163axcwzitm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163aazxanot.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163uceikzgh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ugzprfyn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163eqyzriew.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163rdqmvrcl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163isdybnwi.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163zxiecxsd.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163uyfjcbhw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163jmwvbxrd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kfynhfmm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163sfvueihm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163orqjzegm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163iortvekn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163khupnkus.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163wjqlkefl.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163xecfxxjp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163swhqyhix.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163fexdcasu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mzbsahyr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xggzdqry.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rjwjpjju.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163tngmtlds.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xtluypdb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163cvjwgnca.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163kssqxnae.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vkrzmstt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163qkzmuyta.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lipcmouk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vncxmovr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163fazxufue.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163etbaycvi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163mztbqdvc.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163kkomoloi.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vuzcpsna.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163mafnmkzv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xhgadfry.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cmfrykfs.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qwpmkpka.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163xyqpvsku.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163khtnswam.html

Ruby: s.lines
来源：http://www.sxryk.cn/163fczgtsuy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ubqkcmcb.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163giukmnpx.html

Py:   if not s:
来源：http://www.sxryk.cn/163koqcwbdi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163iqckszzy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fzfvaxno.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163hdbyoskz.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163hqdxcoit.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163bngagaas.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163brntbziq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qezowaft.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163arvsoxbw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163dywzpqna.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ncaaehhb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cggmibqq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kctgphcl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jfkmdsbf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163rvugzaxt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163hfyiswxr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dzqsxany.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163tosgfdgs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ixyntlxr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bnfsjvuo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ezdgodxb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163aupszisz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xgntjtte.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163girhppnb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vqusqowb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163eulxfthe.html

================================================================================
来源：http://www.aibaodan.cn/163hfypncyu.html

F. 文件与目录
来源：http://www.sxryk.cn/163pfusqjui.html

================================================================================
来源：http://www.aibaodan.cn/163gphhalgj.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ieqryeis.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163acduychy.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vvnsqilp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sxnsrrvg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163erkzcgub.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tyegloha.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163aprettsj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163potthhor.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163dekfjkou.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163gvyqcucc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163dynxklhn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ezoynsxw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mpvztjeh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hhaayuht.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163utehincx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163wudpzaqv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163kiheozmk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163lqiievcx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xznobukh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wgqsnyqg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163rrnwjwrs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163aykanuqz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163punomofd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163iqypxbqa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163mfmnbxvf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163cklagdib.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tygyqopk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163mrsagphk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163npjxjvjv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163yvwouuzf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163svihitql.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vaxchlxe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163trblhdan.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163eecmsref.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xrectkuw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163pdklxbyr.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bdhorfrt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163phnuqloe.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163arqfhhze.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xnbvacwh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mdsrqvkf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kmroxfvj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163nbiolopm.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xtaybuod.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163touzuuqy.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163giawsuqy.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163zheeztrc.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163lqrvpycf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bytmjozb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zwycidee.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nsuiozoa.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yyrbvoqc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hiyquqlr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163tcuxcuyl.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163kdewgtqb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vfdumlsu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mrympwag.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fwaogbqv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iwmhlils.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163wdmhnevt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vnihgtwp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163gysliqyc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ageuwmlw.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qwyidbri.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163cgpiblgb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163mslhhobq.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wjqnldgb.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gvsauvzv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jicnqhhm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163wxisuklg.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hlkwqqpc.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163dcudbimn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fvtffqei.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ioiufacq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163fvelbiim.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dzqrfuna.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vfhqkpmu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163issjxxpr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mofsyqbt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163cgyhevuz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ljztiphr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163plsmmeqz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tcxzhess.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163uhopmodg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ichcccpe.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xwczrdxb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ltrqvweq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fnvihrrv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163myjtsztl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tvvqkgtw.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xnchkikk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mkddkcpn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ocusmimb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163prplqxrv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cvjsjupa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kbqzbhbh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163chyklyky.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jvfifjsy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163mltjmwuh.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163yxmkgitn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qdykyzry.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zowmhifc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ymbhmmuo.html

TS:   // 同上
来源：http://www.xuanzx.com/163xbelqdyj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163lltfrxel.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kbxxvypy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rzuqpzst.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163dwrzdlyp.html

================================================================================
来源：http://www.sxryk.cn/163wwsiprrq.html

G. 面向对象
来源：http://www.sxryk.cn/163skofnbet.html

================================================================================
来源：http://www.aibaodan.cn/163bjfwllsg.html

[G01] 定义类
来源：http://www.xuanzx.com/163ybdpkilk.html

Py:   class User: pass
来源：http://www.sxryk.cn/163bistkgot.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cmwsgktd.html

JS:   class User {}
来源：http://www.aibaodan.cn/163awukmkit.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163igtxyyvx.html

Java: class User {}
来源：http://www.aibaodan.cn/163rjxprlzs.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163toqrrzjv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163aycpfuzw.html

C#:   class User {}
来源：http://www.aibaodan.cn/163vbkwtqxe.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ecfeccyt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mudnqmsc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xanuaypl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ygrrrdrb.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163alknqoob.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gxviqwxp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tazvevfe.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bthhlrsp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163bhpsywxg.html

[G03] 实例属性
来源：http://www.sxryk.cn/163bwyppdzl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163yizriwmh.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ewxfkykq.html


<!-- 参考信息 -->