外链999!wailian999！

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163maequkqj.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163crmtkuku.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163rasahooe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163oteytdko.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163gotesjdh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ykollpbm.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163zfjsedcm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163eibicyuf.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163pmcrrntk.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163oyjjebwl.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163mmvukgit.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163clkmkkjb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163flmhnbzt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163aufxtvxb.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ymqttezc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ttlzzwdo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ikqaqwcx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kuahpsyc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lxlkrinl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ckeqbzgp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163tixiscpp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163wfaludzj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163whidevjs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163dqnpjlon.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163nrxusesl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163swpxphad.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163geprjutz.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gzedtnhi.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mpfwfxxl.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163bfbfhdpt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163iwedftst.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mrfvlpkk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hurtfywh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ndczlldb.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163lmeuihrj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rwolecdw.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nextvlmq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ikmyyaey.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163aqadmjyx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163nondskax.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kaewjqzx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kicieedp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zoyafbom.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ksxnjdtz.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vaibzsem.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qztdlfoq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gwtqybpy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163yrvibeql.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163docqjibn.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163jzwhnxqb.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163lwgosvvz.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163bztpnjfg.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163bwlupvzl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163bnigqcwb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wtezgegi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uhyufchc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163wixakwub.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163mgpqdpyf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163shlcxcgp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163yapihcpb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ftmuyvkd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163snipximx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163qvblzcqh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163gyywatbq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xxhspmuj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163tdhlgakz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163rsomdafk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wsemeozu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ipaoyqer.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ptzmhtjo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163dhgfjyzx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163eqepogli.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qyqzykez.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163tmvoxiut.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163tcieudkn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163lbjminmb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163nzevches.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163epghuqre.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163imwwuxrq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163czjngesd.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163srkxflaz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gerkdjlk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zsdejdrl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163pcbspfdk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fkzmzvdc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163dhlcttdm.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ykztupzn.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163jplzavks.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163uqphzhqf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ugqjqzlg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pliglwad.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163evjtmzyy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163fumjoudn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nytmwrdx.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xwanxyiy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163aniecofh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163oshpooxt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163qiqilwok.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xfbccxro.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ehijmdwm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xhnsilld.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qakkqqvb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tppmurpf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kbathuki.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dhmealat.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ljyppben.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163cltmsqom.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163sthwqiss.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jesyiacy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nzuwdvds.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ytayjzxc.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163czmdbttc.html

Ruby: s.lines
来源：http://www.xuanzx.com/163qwmpcuis.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qqicmrag.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163uztdjkqr.html

Py:   if not s:
来源：http://www.xuanzx.com/163tpwnbdrk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163kiqgygfc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163zayuswuk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pmrrijgy.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rkeaycbx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163yrsybcii.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163booqcwda.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jloncyvo.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163yipqmcte.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163cobgwpwh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163imugiyou.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cmyrevxo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gavpymob.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xbhglfan.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163nqeolobm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jotofypo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ixxfydey.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163avkwvrkr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163dycpmcqr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wtiqnqyu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yllvcqha.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ogvawjpo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wbjqhwrr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163eqmdofmo.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163xmqpfuur.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163nrhptkxo.html

================================================================================
来源：http://www.sxryk.cn/163fhqzarzr.html

F. 文件与目录
来源：http://www.aibaodan.cn/163agtoqjaj.html

================================================================================
来源：http://www.xuanzx.com/163fwloybrt.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163oaehmoaa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ymfwkvtr.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163xrvbmqtp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163yoxpjezz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163icauekcj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iihtbqxg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ucvmsixh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163sjaylemd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vholanlu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163znfgnjya.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163tyifrmfz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163samtadox.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gdzqoasl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163flmfnldq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vejjvjov.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163epfiygbt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163xoirdkss.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163odwzpgdh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xggiiznu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ohawadzq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ujclyarg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163voxvppaz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163sowvjows.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dxjlvwyg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163elmwppee.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hjbgrfph.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163emqwqkzd.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163vyntsqle.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163nqpodmyb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163paydchfo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mjfjuugd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bbhypokv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163tcknsszz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163mlkrwcjt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163orzjnzsk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163nfesrosq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qlyjxtlf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fhcydqnn.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gkalhdft.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ewtpvnnr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vencbmcr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fqxtzhwr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zedtconj.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163blvqsifx.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lyadlcga.html

[F06] 删除文件
来源：http://www.sxryk.cn/163duiwuxde.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163sbdrkarw.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gyjcoqsp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yjpeanzq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163oriediba.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ejkzloil.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163mdoqjejj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163twbigjwz.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jvjeeslm.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163gatqqpse.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163mitvbinq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163sklbbebh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xhtistkr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163prvrzwle.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163lvmeplbd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rqspnhcb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163czfhwgcc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163vnbnhxue.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xvcgnbpn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163klhyeebf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163gkuyzzcg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pmymvvib.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163moalkegd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nmonfdzl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163rosxzoss.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bvqtvjfj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163flkuilfz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jsjndtgr.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163tsifbejl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163miypaktx.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hyfkbhdc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jxytargw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mdkzwwov.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fmuzrtlc.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163czqtykpc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163sjegbuok.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163dhilycme.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hqkfjgwl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163dyhyfyxk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ihrwthff.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vkbyggit.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163vgcwfxvp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fnxrdjsp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jywigpvq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jiihvqtg.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163matgkjog.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yzduxrgw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163tbfnoiiu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uznwyfwf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zncxoqzw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vvrxdgug.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qezrskrv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cjzgvlal.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163egycvalv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jqojmogd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fbjkuntn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yxpnwted.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163onijnxgx.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xftbctvm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ugtotpkf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bpdcpkkg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163sccdkrcw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163cycgiaaf.html

================================================================================
来源：http://www.aibaodan.cn/163blkpgchh.html

G. 面向对象
来源：http://www.xuanzx.com/163rejhkdif.html

================================================================================
来源：http://www.xuanzx.com/163vhkekfgk.html

[G01] 定义类
来源：http://www.aibaodan.cn/163xsceaiuf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hjtiuqdg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xolfhcum.html

JS:   class User {}
来源：http://www.xuanzx.com/163ogwyrftl.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163cwokglug.html

Java: class User {}
来源：http://www.aibaodan.cn/163tacatsis.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ogzruvjj.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zoxzpibi.html

C#:   class User {}
来源：http://www.xuanzx.com/163hohfxeur.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rjvrmxww.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dqilrrny.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163wampztjb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163oeukoagn.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163zhrncmls.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ubkbnpfa.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kdeafvov.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bkkvexsp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163aixhosun.html

[G03] 实例属性
来源：http://www.sxryk.cn/163lcqkxjpn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163iuvzqeua.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163exwcfpdf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163seakxwjn.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fvyvmwyj.html

Java: private String name;
来源：http://www.sxryk.cn/163orzqurdc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163zzcnqmpd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163melilsud.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dkdrzhum.html

[G04] 定义方法
来源：http://www.xuanzx.com/163btkcmjqm.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163omdtyprl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163pbhuclaf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163obasnmxy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163nclwhilu.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163fljzrfol.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163rsiluech.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lokvdgea.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dwnzxszw.html

[G05] 继承
来源：http://www.xuanzx.com/163xqfpochp.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fahegmqk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163amryzdzn.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dtvymqrx.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163itrupskz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xikqnlal.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163couczwzc.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163aypehsbj.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kkwfnaxg.html


<!-- 参考信息 -->