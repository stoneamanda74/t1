外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ecaikegh.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163uoawkwef.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rfmzefgw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163uqkphqbx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jzfmfhqx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ashvcfkg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ummxntou.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163grtuhydu.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163sbceohrp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163sglibhuy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wnkwbwwi.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ajlsqubz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gwcaskae.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hvqripyy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nbytfqza.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xtoyfjmf.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163bbbxdzin.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163asppcqme.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qlnrmdki.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163uqthmskn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163trxqrqwu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163dhsjjtlq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dfwxzuwp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pxtchwvk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163tnmkaqrt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163aupsqlzk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xofaibuo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163phbkmypd.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163axcinuxr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163bosugrhn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163curjgdgr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vhnxtypc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163esaqxajl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ssmgwqbh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163awyhgqya.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163abfknrvg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ozhpdphw.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163cjgxqebo.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163tpngmbjs.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ydefskfh.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163yqiaukya.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wsuyjjkv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kfxgaeuw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ohzipmdi.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ztqvolst.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163biujltkr.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163vjuhzcyl.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163mheuedka.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ainlwuvz.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tcivmoax.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hnbewcga.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163fzcaretl.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163gxfgxkiy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rbueibze.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163akfawgyb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ekeiphli.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ilzktgff.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rsrhljlw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163izziayzt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mgdrcgsm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163wjatfjou.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163owlznuyn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qhbdknxd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163afobvcmj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ldufagpd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163yjhpbzlj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rxtdnafd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hamiktth.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163qsufkkal.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163srorbplx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rsihuhxt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163tpvuduqe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ztlomygn.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163hptkbbpj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163cpbwykve.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hzvxcxyu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163gpgjefgx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zhcdhsip.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163gvntfxhk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bqnsfuei.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163hxooxnow.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jthdfmmb.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163nsfzdqlu.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163eluxfrpg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zzxzvekr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rdrvnikj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163btfrpnyk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ivxykiwk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163nclmbuoc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163vhtxweco.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gtldoesk.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163yjqtfquc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163yadsgzrw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zouqdkib.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163resegbxx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lhukwqrx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wqptbrcj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xsnwqzls.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163mersenfy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163owblxxct.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163miqmmhgg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163unjvevas.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163yhojsatz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vvrszqrw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163srbnlpgy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hvcbndxc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mlkmvmti.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163esozwwjt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163hxgwigtl.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163dgnuqyxg.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163vtrqgygv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163cgzsaspl.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tkouzcsy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cricujag.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163hfxjrklw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163hsoztjly.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163umqwrykb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163lflxckls.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163dacfyvdc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163valgkxib.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163vcifkhuq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vcfzwrpg.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163updzyshi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163cpjsdyjl.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lvcplrqa.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vovegdch.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sortkfgn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163jbimnfnk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163diqzlvpm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ycogpnkz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lalyofrc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tiboghhn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ojicoqaq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163fntjhbjz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163sgybkdfv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wplhatey.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163xcemumhz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163berbuaih.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ccowndmk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fkpkjvgb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163itbuemjz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163imccedrr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163uzegpxty.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ufvjuvhn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xpacmniu.html

================================================================================
来源：http://www.xuanzx.com/163wpuefcif.html

F. 文件与目录
来源：http://www.xuanzx.com/163xvqzwyns.html

================================================================================
来源：http://www.xuanzx.com/163zyezygzh.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163tvqjynta.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bdzyaigt.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163jyojufej.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163esxvjdfy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fklvcdtp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ktegnyze.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163iygdztug.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163tbspnigq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163leevpzgp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hsticsug.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163mminkyem.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163nfohwriq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hcfkyefl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ofcakaxi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ppcnmvdv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163origwfif.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163yfpewvtf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qpwsbxmm.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163jqpnhjrp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rdkzrfhm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163gxxdupmr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wlbdmcpp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ubrpmccm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163snbxiqyj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zvmfiqjf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hvcunnnp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163uiafrhqk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fmjqewja.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163unfwewor.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163apzllekk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wpylcbom.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163utbtfgug.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zjlsoczy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hkurtlov.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163dllcstto.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ypygzozo.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163tjoiposj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163chpccdac.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163folecvdh.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163edrzanwr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cksoljus.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163giieujvx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163floblpdy.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bmnpcqyg.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fxmgpkcx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rbiequgc.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jqxlrrze.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163xbeqlfip.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163edoortyh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hvcgdcuy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jlkgopye.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bruqdonn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ikymtquc.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163xzziomda.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163uuxosgwv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vaxomcmt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wrxqaoha.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ggqbhjzg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wnzfgfzq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163cudcabmt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163kwclxnfs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163emqlxmdj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xuymwxqk.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163conymfrd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163akuvspyk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xhhqkgco.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rixiswur.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qziqczqr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163apwrgqzz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hzgcqrwz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ogckptuk.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163euogyatc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163rtglwbre.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pberdbdp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sbyfotnu.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163poryailw.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xgkohema.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qqkeslvl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163fsyftapy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kpmfovvj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163osamagst.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ihvrifkj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gjdzmlqm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hfhvxxcr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fnmlhujw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ndyqcroi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jdsyziee.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163nuztorym.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kwlbreso.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yaqutmzk.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163hgdpvszt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vqnggahl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bbjxicxn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sqowxdan.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ffglwkiq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163bjacunfz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vwuccqqn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tjrfzbqm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ohmjwzbn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163qwviruvt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163txtndmmk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163sftrwnhw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163cmtqzvyu.html

TS:   // 同上
来源：http://www.sxryk.cn/163mstiqxfd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163nfmqexfl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qabxjyaz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163cvmdtcqr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163udjcidnu.html

================================================================================
来源：http://www.xuanzx.com/163bawqefle.html

G. 面向对象
来源：http://www.aibaodan.cn/163fktshnve.html

================================================================================
来源：http://www.sxryk.cn/163woaeujoe.html

[G01] 定义类
来源：http://www.xuanzx.com/163ravhvipf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163cxfkbypz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ccexltji.html

JS:   class User {}
来源：http://www.sxryk.cn/163vbrmpcjk.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fzkgrsvl.html

Java: class User {}
来源：http://www.xuanzx.com/163tuwxpetp.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ewpehmdq.html

Ruby: class User; end
来源：http://www.sxryk.cn/163bpfrrpmb.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rnkguijm.html

[G02] 构造函数
来源：http://www.sxryk.cn/163swiaqrkx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163bzjujlgq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163pfbeaipz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ccdqrmqo.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163qxezmqjt.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dtgpxuaz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163exlrkvpr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163fbwvrpnf.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163egqbadvz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rdjfocju.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163lvppmigv.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ymfqxjfc.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163txpyuwwn.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163kcknkwll.html

Java: private String name;
来源：http://www.xuanzx.com/163fgmtzdin.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163uoqkrhhb.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qaymmsbl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163uwquidjl.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ndsamynq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lrnnilok.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ybdhcntp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163yigkwgeg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mswqxvbb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rzcrzlad.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163hjnsdynt.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163cwcgjuwg.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163sgtwyvxl.html

[G05] 继承
来源：http://www.xuanzx.com/163itnhovtm.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163jlpazdcj.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ragcxcuo.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cxedtiag.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163iukrrcfy.html


<!-- 参考信息 -->