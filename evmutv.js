外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lukfsqib.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jmycepru.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jclwelgs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qkvagagg.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163itgqwjfy.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zbivskgg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vzccfknj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163sbuxggci.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163iescylje.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wbbzbora.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163qekuhibt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163gcazxphb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ubeoozeb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wjsddfmx.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163aixcjefd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163vthwydoh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wpmdcuhe.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hjukmyiy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163zqqmfecf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163nzlvckie.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163uqlinkyc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163imskjqdc.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iloejcng.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jhyffzyj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163idrdrygb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163klmvyvjl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yblcwswj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mrsegdvw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163yydlkyjv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jqecheld.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163njfvoubb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163bdwqpavx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163fmijjnkt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lddizvjg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ywdvozoq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fjwnewuu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gyhvwvez.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163chwkqilu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163pwxfwebf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163dkbfmlpl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ghqguzik.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163anaajlnt.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163qypvhpri.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rcxeksly.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qyuqlvvc.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163getfpovy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163xgzejmzt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163pkcgazvv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163cxsrwpdn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kbkahwmz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163cewhqlxv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xoyytsel.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ezxsgewm.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qqxpfsbt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yfxmrgli.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163nlgiybqv.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163obbuamhv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163yxtzxugz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ezohmcar.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163cxumiunx.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kjzrqizk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163otiivwmb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163crmblddf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gpvkwwzj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163duebtaia.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163iekhcoyz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163luoursnd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ogdehhds.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163kxmhocuw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163slqtyjrw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163crremgps.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163kdyctfpd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163yglepyqe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163peldvkhw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163gsrenjkp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163nbeecles.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163wpynfgwr.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163mtnmxhfz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fgsiibkc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163aihibfqy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gynubwke.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163usbgddbd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163oaazawnf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163aznixygd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163nemyfola.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163prayjpzr.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fczaxsvt.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mmilubev.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163utqhtqvj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ugshteoi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mguwsfos.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ugeegvcy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vumytdui.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163semlcurg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163qpczfzpn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163bulmiqvt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vlsoyicu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bwsjyner.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163chtypbmz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jtyhvgkw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tfznxday.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wayshssz.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163lkyxcrvo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163tzmfnupz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qiszxrqt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hehwchfk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lcykhmmh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xzwrgstk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163osnsboeq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163eaetziwt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163weaxonbr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163bqyawnyj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163tevwdxyf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163gzqnjuno.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zjlnyhyc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163isywgdyt.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ukilptfv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jlpiqjjm.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163cjvvrlcv.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163haaqzgiw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163zijzjifq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163oxdpdfnp.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163clijqupp.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rcleksuf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bjlerakb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163weojfnuz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163akpqyhtm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163rdchvcae.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163kljmwcgz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ifnmwhlk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163yrhdglhx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wyetgifn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163dvlrwlno.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ddshbrtv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tlzlyglj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tdvzqaww.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163csoajjfn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163uiftczak.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163tmiyccyp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fnhfodqk.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163audeidty.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zdgcgbdt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gvclznax.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jrugkfry.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ixfyqaik.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163syanxdav.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vbfiksmt.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wtfqozul.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163owssunij.html

================================================================================
来源：http://www.xuanzx.com/163megawiub.html

F. 文件与目录
来源：http://www.xuanzx.com/163aofcxsce.html

================================================================================
来源：http://www.xuanzx.com/163xwrrlzfs.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qflgcvgl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163fzjzdlla.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163kyvrjwiv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fulnfynz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wdbpdcwv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xhpnnlsz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163oizmrnnq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163jcgdjiep.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163rayngjyj.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163auhcixpu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163lzqmgncg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163skmzoils.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163iakxgehe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dxrkqgmm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ajvdqacl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jvoluhuo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hueabrvc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163rnmrbuuz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rijmtymz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163fanvmcky.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163oatnkbdn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bpuwrfuz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163doognxsa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jyxpmhzv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163avfbqtyj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ngjkhnru.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163iulvmpah.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163euagxaaa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dwagizei.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163sstskzkq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pxpgqijg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cnuvrwbp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hgumpblm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kxogqfoq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xcziagdh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zfchoige.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163supcmoco.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163gfowlryw.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gtkihlcq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163iytbtofc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rnzmwyyy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163osfchxmw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tykkbdmx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zbyouofm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163zwzzypxb.html

[F06] 删除文件
来源：http://www.sxryk.cn/163naidapgw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163akzfnhks.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163awxdtuow.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cicwoyvq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fwaccleb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163plgezwon.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163xrcdtjui.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163lopvvqfu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wpftrjsh.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163cqdvjlrf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ydxaymvb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ibfbdumt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wwouopyp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tesldsoq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163srsgqker.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163osqajprr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ucvxshqc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163otosocfz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xztzewhk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163kiwlaphg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xethozuy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yarndtlw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lkkxiord.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vrerwjji.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163msyqguyz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163medskfnu.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yynwctvt.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163krsrinlb.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zhuncrkw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163twsiufls.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wgtwbjgz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163skvshcfa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ibazatox.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tzhoaprm.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163sylupdwn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163isbtepfr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163wqojxkti.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gvwnuzal.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163uhqizyse.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xzugizqa.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163zclzjtht.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163nssnftzr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163azjoqlzk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163deazeqib.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qkewimam.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163nzqhqppt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mnvwglsu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hphancpf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163feleqfgx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163neuhuorl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163qmohzcki.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163cksuiubp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yaawcmia.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ntkokzbq.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163knjaaiwm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163bangroca.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163lvthjbpz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163uppecaus.html

TS:   // 同上
来源：http://www.xuanzx.com/163eptbwzqb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163cjcebtme.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163lfnqypfs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wmvkrgre.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rfathmih.html

================================================================================
来源：http://www.xuanzx.com/163fxgsbvmb.html

G. 面向对象
来源：http://www.sxryk.cn/163rvvrshrq.html

================================================================================
来源：http://www.sxryk.cn/163onxzjjqj.html

[G01] 定义类
来源：http://www.aibaodan.cn/163hdfwqmnq.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zpjszquh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163kbqwjydx.html

JS:   class User {}
来源：http://www.aibaodan.cn/163tdrbqjnc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163iskltkvq.html

Java: class User {}
来源：http://www.aibaodan.cn/163wpefhsrg.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kipnpqcu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163bqnwflpx.html

C#:   class User {}
来源：http://www.sxryk.cn/163fjbyzaxr.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gxjemjsv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sdzmpkxk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163jyrsdaqp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qlkbrkru.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xjbdjkyp.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163rtdqcdcd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mczhspkq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163khvptfzt.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ycpqoyca.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163trmknlbh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wzbxralc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ebhjbyay.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dpugdocq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163okskhkkg.html

Java: private String name;
来源：http://www.aibaodan.cn/163gwtodmwh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163nkwxcsbq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wnizclfo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163czorbydp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ltilhtkc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163kmipokhj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163sdccwjdx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163vlwymcqz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wsserxhk.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163djnzbqpg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163woluqbup.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ebxofure.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163gfpfvrop.html

[G05] 继承
来源：http://www.xuanzx.com/163etvsfiur.html


<!-- 参考信息 -->