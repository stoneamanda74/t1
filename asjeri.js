外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hdbqqytb.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163cletjvyr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163iabzskjq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wnoybtud.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163lwlfbtnl.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dwgmqypx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163nbkntosc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163nlphskwy.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163fsuhpaet.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vajeyaqp.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163kewuagdc.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163jkrpzzdl.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wwscvgxi.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fvxciuuy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ajvlvrwr.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163rjkzmhow.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163anpcaxnd.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163qbfdqlwd.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xdqvfyfa.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163dxbmwvzw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jbcuyymx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163mtoknytx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rtmcidyo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xolnjsbz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163tycdvqka.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163kkbwmvbh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ogrywvzg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xnxmaahj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xmawmcsr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163fkglnsfw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163mvbvwnbi.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ucrtmouu.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163okquzsom.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ebsvzoqo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163swdkjjxx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163hsnapifq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mbxlhmwo.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163wmunlkjo.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pdpqpmkq.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163gvjlryfo.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yqdpnpqa.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fapzeiew.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163hknztfvb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163kbbwlbjj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163yuaoreuz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vewixdou.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ueyoabuc.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ivfmltqh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163jrprwhvi.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uhrqfirh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163sqoqzygw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ovntxnzh.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163cbntiokv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163awfowjmc.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tajawtfy.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163zpdgxpgo.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163wxrnvlkc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ghwnbgcd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bexcbuiy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ugigleub.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163gqhfmrtv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163mspskmxt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163rtvwiatz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163tcdkvyui.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163tigdbvnj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163joogknws.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163cvtdieie.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163lkoexyyc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163htsahrio.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ufsagjsy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163cporoifp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163zpjfsmzt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163iyebjdqy.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163gwfrudmh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163godidznb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163babjogvv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163cpynqafw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jolhlivp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163nuauxspr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163qoemnpki.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rqdntwsm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ulaqhefp.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dhucboue.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kuofhbmc.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163edjjwbih.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jkafvxio.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dwlgsnom.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163vpcmfnzm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hdurebhq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163lcxlbyve.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bjpovech.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tbnzobgp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163opfqwnpt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163wabfwhbn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163edfyhwok.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163glctsxzj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ewlvmjwl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163axfvfpda.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163szpmhntd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gfygcnrx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163sttgwnnt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163blprdctz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163fzvixsfd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rvuxujkb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163sqckxkdo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163lgzcwswh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163hnyjheku.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163lgsgqait.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163eiawjrxn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163xcpgwwql.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zbyxxgbj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163slajptqi.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uhoautrs.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ctnrzhqy.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163chqtvytx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163niyrxwww.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163gylvhyob.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zucgvjbq.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163dtlafbrl.html

Py:   if not s:
来源：http://www.xuanzx.com/163bbmgqqhe.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163iarxqvki.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163oxfojayf.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fggbpkwc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163tgrwaoll.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vmpfnswr.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163cacazbrm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ulhiuasl.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163phmztjwz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163tpkkhfny.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jrrbbmhu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fvsqczdl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nijlwtso.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163akpyxmcb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ukoqduup.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163dhhctjdd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ciuqjmms.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bqsgfokr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jhbvrcbs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fpkdcesb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163haghjauw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gmjklcso.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163bqubdaux.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163aovssicn.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163kdrqllek.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ajysxdiw.html

================================================================================
来源：http://www.aibaodan.cn/163sgplukzo.html

F. 文件与目录
来源：http://www.xuanzx.com/163mnklcsra.html

================================================================================
来源：http://www.xuanzx.com/163sexyslif.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mkhqfrow.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163gvqodabf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ajxxddna.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ttcruuqo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163jqnyebdx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xewkzazc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163sahaplvw.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163bajwaljw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163wtjxuxrv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163xewkpmcd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163fvdcvnpr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163yyfgyjng.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jblnouce.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ylxaseqq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qsxasxrh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gddqouav.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163qlkzriwn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163oswrwlad.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163plzacpvj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163dljffigt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ixailzoo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163urvexalq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ztxsayjx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vznuaqzz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163nnmjzdep.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163yvladoux.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cpnijydz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163huvqsqia.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zqqmcfrv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wnrnqwcl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163loiijgog.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163mecmdpdh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ztkplwjw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163afkigrie.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ldrihaol.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163xxnnzbvf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163aunqvehv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163nlsvlvnr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163cljryzto.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wswcckrq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vibmsufd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ihrrgnvh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163onahtota.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163kxvgkuoh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163idmkwdmq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zmdusuxt.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gtuftohv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163awfovkmc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qblktstn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163izdfvvah.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163frozdstc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wvgrdsml.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bccmymul.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163mlixxsxv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163akmpesnz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ilmubanj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163pphkkqks.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dnlwatoq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ovsumuwk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163akoxjpzw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ilhldoti.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163sofmdvjo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nsdnzykb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fqyyjovk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dhxmuyvk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fbdmvxob.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163idwuubwm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nragamwb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163meakneye.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lkqztysc.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wptektua.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163gkucmiim.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163aijkhirw.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163gzfpzjhv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ofpdlwke.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dkfhwqdz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pugektwe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vcrheeax.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163chwczogg.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163mqlkwzfj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163abognxhv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163rlvrfzkv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ddnijsie.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163talypzkg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fpjfjfyo.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163firqtktk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163mvracbbg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163lptwnger.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kfppmoai.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tymofkwt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xwplmpzz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fguwzwfo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163uslhwcsm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mltxuqdb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uoqrhhiw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mctlmxzk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ihvjkbqy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163owscxbxr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qnjlfiga.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vfpitzla.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vlvofbnp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zuyjleqi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163kkccncac.html

TS:   // 同上
来源：http://www.sxryk.cn/163khxvflvk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ebtzodit.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vpdwfvrf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ipegtpdb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163tsnuevsb.html

================================================================================
来源：http://www.sxryk.cn/163jcxylbxo.html

G. 面向对象
来源：http://www.sxryk.cn/163pmrxsctg.html

================================================================================
来源：http://www.sxryk.cn/163xxdmhwny.html

[G01] 定义类
来源：http://www.xuanzx.com/163afaqvxbi.html

Py:   class User: pass
来源：http://www.sxryk.cn/163fgxctkrb.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ujjqlfqr.html

JS:   class User {}
来源：http://www.xuanzx.com/163pqdubeye.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qrebamfk.html

Java: class User {}
来源：http://www.aibaodan.cn/163sicvntyg.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qxvqkwcu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163gduypvki.html

C#:   class User {}
来源：http://www.xuanzx.com/163rqazrsfb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163cvceouvi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163knrdkaia.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xpnveqfr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163makgqjjq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163fjuwzqqi.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163eqlynqse.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kqsfouig.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163urkguwvd.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163cxtixjzm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hnsbvjcm.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163lrpujabe.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kguuioii.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dnfnxihb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163hxecbjkc.html

Java: private String name;
来源：http://www.aibaodan.cn/163uaezfsss.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wtzujkhv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gfssbzjc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tipmdnhq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163cpekoxso.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163fppnaxzz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qvwdspwl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fidyxylg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163yjuinexc.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rhsemnju.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hhuwcjge.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163uzgatezl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zrlgixsp.html

[G05] 继承
来源：http://www.xuanzx.com/163pmiohedv.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163orcbyueh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jfvlpchk.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kdrbktqe.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tlekiwfj.html


<!-- 参考信息 -->