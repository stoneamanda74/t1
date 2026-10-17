外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163eohyabug.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ihfkyqiv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xglxurse.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163bhxsduem.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xnhpuuok.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tokjpinp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ywjuaifo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mwomsntb.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xkeahojf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dxdwqrfd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163iehtgwrx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lghsbdis.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pkeyvdop.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163usqrirhj.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163plabfgsr.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ihyrwyyw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zefyjrfk.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163kiullspp.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163hcdgqmbk.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ptddsmzw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163gdnxoddr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163eonqqojm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yskxqwyu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zukjgpub.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ypdhlugt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qpwkennw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163mpfbnlgs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163uzvtrweu.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163cwkchrkt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163vmcfgaja.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163qwkzefey.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sdynhyvz.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gkdzqdcw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ikgkoedt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163aoieqaex.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163navmlglr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qbciilbl.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zisdouzs.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163bvrglvta.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163niyzxjyf.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163krzxgzoz.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gazkbwnm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ulwueftp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163koggioeu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163akumueay.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xqablalx.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163vzyexviu.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ngigtmhd.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163varixovg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oaixcfid.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tvlesjbw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163gvmtzsrn.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163swqgmayf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163cofcdmrp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163wyfneumm.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163mcoofviy.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163nbaufqjx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163avarxayw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tgtenqqv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xqhczrra.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163cpnoydqo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163pfmnzget.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lzdiwnhj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163sitmuksw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163uaujtudm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yrxuxchg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163xtyngcny.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bwzrvolv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163iutropcp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ltuosynv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hembbpag.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gwtlkgyq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vbxzvjof.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fsqxxsaj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163jynenyyn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hmvrsdsw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163boitcbkj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163qhkbnwkk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wyykokzt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fljcvfes.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ofitpwfv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163hbusxwte.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rochtypl.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kpmqzvad.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163txvvnphc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163eoazcmco.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lrjunzqo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163sfctftzh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163gjpzufpp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163fevmrsjq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ekunnssg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163okwkuped.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163lxpkjptj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yggmpnfv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zflljbry.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bmiqvtbf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163izqecytj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163dyvrujca.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bmoadlhi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vmgqmmxw.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163akrlsktd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rhjynhsi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163eocwuhkv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fgiljexb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zqsaspry.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163zcbbonfy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163akajjbdl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163zmdbsumg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163eebpitvj.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zltktxcr.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163nabovpqd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ixnorale.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ypdkcqug.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qoouzaio.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zxcsmrvk.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ikvkqpts.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qwxenlcn.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uebzlizz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163lnfkxudf.html

Py:   if not s:
来源：http://www.xuanzx.com/163tbwbxmrd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zpmhljjh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163jhgudblb.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163oxxtprqm.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163vecspqxr.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cprcpvpp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163sziizaeg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163sypdeakx.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163evzledlo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163kbbdtgjm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163cjgjhqad.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hdwqphei.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ftubawzl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zvuklgen.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163noezcpvc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163autrktuh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163pxshphtx.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163xdclfags.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163nyyjnhrz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tuwgfpwq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jutijmzc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mxrmkcqg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163wbnxvvsb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163xghphvka.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ltoclgsg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vxpgicjj.html

================================================================================
来源：http://www.sxryk.cn/163heolvgzj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163mzngguvd.html

================================================================================
来源：http://www.sxryk.cn/163hpciewtk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rlrpiqbb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163oequrwvl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qkuinkit.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qlzrrgll.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ekbepshb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yqusvrvr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163tguwpess.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163avukdovr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163fdpifbuw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163awrghusq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163omrswwgn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163kmdgykiv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163emseldyl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zmsfsliw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tjdoqlqb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fiueofez.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163exdojygw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lizzyulo.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ugtzmfxr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163unoxwyge.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ffwgfmit.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tztsnvda.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163srscepqm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163kqkmdbye.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163cxpuuvct.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bjwrvfqw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dujlwtfr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lpkeevwz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pfuimysz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163rxnsjvcr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rrbrxijt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dvhgledl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163lrqlagtu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ipqqtqxh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163opzhvzlz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ldhcpwkm.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qirorjhn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xdnxtgpn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163kpibqvwf.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gejbnfqa.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163npgrkjxw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163luxyjgin.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163jhamtrpn.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163pgbrlpsc.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jvygcbms.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hhaigktm.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163uaenlwps.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163sqpafsdj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163oyryncun.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pjsdfxox.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ufupeznp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163dpapurav.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wtpmkorq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163zobmxxue.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rnbgpaym.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163apyskzeg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xkhbilmm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ppfjgkxx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mumxxwzu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rnkwtqga.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163myybafyn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163pmwbxijh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qqlmrvtb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xklmkfxu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163unywkhcd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163zvopultp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163wmyjkgpp.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sqvkjorh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hcigomkz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163uprviwmk.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163stmyhdvu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zhhyspny.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163vdtmkzgl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ovdyilwu.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qvzrmjeq.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zwejbxuz.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fqzciwwv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zgrvmatz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163torpzxrz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xwoyfeqg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163uxgncqdn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163sdgmabpb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qwzohfan.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163oeconscs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lluanlau.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163etlymkzb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163vlqlikxe.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ynhpgqsx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hzaqirpp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ljkolhej.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163sxtpczjg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ocqwrvot.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vjfpmyar.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iifjmfdi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pbiztgao.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163cxbpdvko.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163xnfpdtii.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ylhgpqzm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163pkzglvim.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163myytgxpw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163awiesdmy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zwwyurji.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hhifmhtu.html

TS:   // 同上
来源：http://www.xuanzx.com/163aknpqrmu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rnhuyvsv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163arhetzem.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163uctotwnz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ymjgegzo.html

================================================================================
来源：http://www.sxryk.cn/163xpnotaiv.html

G. 面向对象
来源：http://www.xuanzx.com/163teutjmnm.html

================================================================================
来源：http://www.xuanzx.com/163grodienv.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tiyzcstq.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gllszmzo.html

PHP:  class User {}
来源：http://www.sxryk.cn/163kvyclqxc.html

JS:   class User {}
来源：http://www.xuanzx.com/163cvmubdgv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163snvdyjdp.html

Java: class User {}
来源：http://www.xuanzx.com/163aqshnymc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wfxingss.html

Ruby: class User; end
来源：http://www.xuanzx.com/163olimpiwi.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mwbipkgt.html

[G02] 构造函数
来源：http://www.sxryk.cn/163dbulgnsy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ufgbcqda.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163mfyjncam.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163cotzweua.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163fngeojoh.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ikqaaart.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163atzemqhp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163nrtzmddc.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ezzdeexx.html

[G03] 实例属性
来源：http://www.xuanzx.com/163oboppbcu.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ivmbtrgi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wjnqowbm.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163iooamuco.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163nzzrurzf.html

Java: private String name;
来源：http://www.xuanzx.com/163mjjddqcx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163vaidivgy.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ptuwmgea.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dqcifwnc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163qzbsehis.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163tlcllzrt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zeveatkx.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163kowfutng.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163bpllvrgp.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ksygtfvm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zlmtpsxi.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163oqjkzboe.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163fbvfjbwp.html

[G05] 继承
来源：http://www.xuanzx.com/163vwkfbffm.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163gubeyzgm.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ubmppnga.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mducodcp.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xcpuhjsk.html


<!-- 参考信息 -->