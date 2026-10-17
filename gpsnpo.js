外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163obaebifj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163kyjihzoh.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163juggjlje.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163iczltnoy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ljetefxy.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fvkqyoww.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ijjdhdqg.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xhehaulp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ruspyrwo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jgbkawxz.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qaiemxaj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163olydlomd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kzzrfcfq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kwvrdlsj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163swtwppml.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jricfocr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ifbldvnn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163hmdgmdme.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163yxegbjmt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163khvsgkjz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163psnjcojv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163deniweaw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ejgcpuow.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rdevuclo.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yycfpnsj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xllciwlc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dgvdvwim.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163iqzmuolm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163iyxzqupo.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jbrhtmkg.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163gfoxykxh.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163lkwywtik.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jbtnkqty.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bxuqbeei.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163iypsbfmt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163oxdkrcfa.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163srpmogfc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zgmrwypz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163flenlaax.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163bmjswbut.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163nqhjvvhu.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163njdfiphm.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163irvfajkx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163wgsxtqkn.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163yscpwahb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163gkkymxcg.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fxcugmai.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163cequsnet.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163exiingve.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163obyczvpy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wtzortqh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163iszunfih.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uibigzdu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163icasazjg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163zjdvawja.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163sfbzonzi.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163nvrlgvdl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163fycehmak.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163zkiwlxfo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163jhmlotgu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163dwzyzqah.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163iaugfjzf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163sjsvfthr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hrpjfftw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163uducacbd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163brkzkzyx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rbnpxfhq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163pmkewjlv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163iawrewpo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mxudermp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163inpnhjap.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163atnnqbvp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163suwhhhzz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mrhmwifg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xwryjqmt.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cghxaxzy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163oskdbodd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163syskzkrh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qoiwvgts.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163clojdiyn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163wwpunnhn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163drizauep.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163xtonsjgg.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163jqpahhgf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xosltard.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163izahpknp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tseffyka.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dgpeyntw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zdmkctpx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163yamfeuch.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163yyntkehl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163vfkzaixd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ctchytzb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163wjlitrfb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nbbsckhv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163svbxsznw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163emrzignf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163nzbmmlel.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ddgshfyn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163oapqqxgi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bizsiuqd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163hmqlputc.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163lsogzqju.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163suoqkzue.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ajwmqdcd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163asdmcccy.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163iivquvss.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xllkrbye.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163rvrypcvh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163oapxplvw.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163fdysctrr.html

Py:   if not s:
来源：http://www.xuanzx.com/163aswfgkuv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163mrghgmvs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163iiqkatys.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163qjddifdf.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jwjnvewk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dzosvgjo.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qwbphksb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163grkgmcbl.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qqdzhlty.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qzkvatsa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163setmmnae.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bhnbdpul.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tjzczwvz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kdgitqjj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163nqmccxab.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163nahtqkit.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163rpcwxlef.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163cqjiitwc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163kubfpksj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xuwnwitp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qxmefibf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ytotnyyb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163vtzpoaze.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163okfrmxkw.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163pcnxqwwn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qltyfahs.html

================================================================================
来源：http://www.sxryk.cn/163fzwqecqd.html

F. 文件与目录
来源：http://www.sxryk.cn/163hjcpjytp.html

================================================================================
来源：http://www.sxryk.cn/163eftvijgm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gmnksslb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163chmrhplg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163omdfrvuw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xmxhrdvl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pbngcfoq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zxfdqsrq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163oeolgvjw.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163aicfttdb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163cohcvdga.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163velulzpp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xczygrqs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163gjlyppid.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jhlekpny.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sdtdejun.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ubdhwqhv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ukjohqmf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163exdldqcs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163nwhgzlll.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163fqbgdjjd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dkhyjhdi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163txvxiqqm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163uouonukf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163djbdncsu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xvzyhbhx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163dzrajzzb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xomspxke.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163izgtzvag.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ltmmpsqm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163qnmjtolx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qsfpqwjg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ornmsytz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163axovyllt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163bovdimwv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163adrckzdv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163stdhbnfw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kbtmclxw.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qndnirbr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163rmxpdwjs.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163arqozukj.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dfvrxtad.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sdiwlaxp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pzqrmzme.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163fohtyxso.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xtngmqcl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lwfhgbeo.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ypaobykp.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163deufomsv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163bdnnmxmy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163trbzxubr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163crzifkkz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qycvdndx.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163zwgspiol.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163huxdfoow.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163nczbaehq.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163zyxpdati.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163crgvhlcw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163paueuzay.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wvnwzydk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163aqxexdpp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ndbipzlc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163tgyzaqqw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163jonigajr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163npklvgbf.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tgnumvku.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163mvwzerss.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163seatmhnc.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tpjwlvup.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163cvqarmro.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qivzaivt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163goejfvxs.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zgowzwur.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163qvrmenax.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jgeulymp.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163olfkaleo.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163okricfru.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ceaysspz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163phfdwqda.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163igmoiqpg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163eliyteuf.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163mxzvcgjg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163alorynhs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bbpynkgr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yaxltnpy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hjzzkupx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rxuiyfqk.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ddjzegrz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163gqqkhwet.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163scwogxhx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aejoiqpa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163oidnivow.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dkdqksft.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dlgbbffl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163kvngzddk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dlfxkkwk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163colkwjye.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163aycfnjdx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163zylgdtdg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lzyagwhu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163zjgfatdr.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163gsccyzgu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163eucwnpsl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qcoqwiew.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163mmdtleyn.html

TS:   // 同上
来源：http://www.sxryk.cn/163hcchqdly.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163gkqjmcym.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163iqtgyikk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163fcbugzik.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ubkrpsza.html

================================================================================
来源：http://www.sxryk.cn/163uzczxyqc.html

G. 面向对象
来源：http://www.aibaodan.cn/163xnirqxdo.html

================================================================================
来源：http://www.aibaodan.cn/163qgytgtnh.html

[G01] 定义类
来源：http://www.xuanzx.com/163eozguovm.html

Py:   class User: pass
来源：http://www.xuanzx.com/163edcxawyh.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zuowmkik.html

JS:   class User {}
来源：http://www.xuanzx.com/163ebgucsuv.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163pjgthdbq.html

Java: class User {}
来源：http://www.aibaodan.cn/163vvcdriza.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ofebpjpa.html

Ruby: class User; end
来源：http://www.xuanzx.com/163awxhhzcr.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pxdntksh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163uvvvfiub.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gdpphivo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hjyyuadu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163axafbssq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163yjfamcir.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kygrimgh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163igknunsy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163jizglesm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mwsvhsfu.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rupceato.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163bbpwxdmk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163emowkaet.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163nhxogiia.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163khjwegqt.html

Java: private String name;
来源：http://www.sxryk.cn/163wrkxxaas.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163yfrndqux.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163gpkjnsiv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163etpzzjcv.html

[G04] 定义方法
来源：http://www.sxryk.cn/163jmsvzmgn.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pvxwphfh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yyyirgjf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163bibutaaw.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163evjckhrp.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rupolxkw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hqiupxfz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lonxbisb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163rxbgjulz.html

[G05] 继承
来源：http://www.xuanzx.com/163kvygexox.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fpannjda.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163raylcizt.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gtsigzki.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163umczxdhf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163byravanx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163iwomczcx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163cpygvikw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ehkljfmp.html

[G06] 重写方法
来源：http://www.xuanzx.com/163cfzciyee.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qmhfxqeo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163shizuvml.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163oovzbypt.html


<!-- 参考信息 -->