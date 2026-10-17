外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ytwvrgjg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163mxcpjjsf.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wzpbawhl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163geoaojuu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163qxspfuqk.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163kkuardnm.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163bgyfzzgo.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163towsvzmj.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vwrqrfid.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163aebvgplt.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163yvwewbfv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163zpmdcaus.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163dqjzmsrs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163sacowbtd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163erxrcvoz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kbxxwgzw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pqngcmuu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163joujrzzk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zsfyhtov.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163zhpkzwnt.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163gunbjfyz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163hmcfhzxb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xgrazdef.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tbgqywfy.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nckqynxi.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163genxdjtd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163vrbxvxpd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xmnvbycu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163aflccxoo.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zscvjwmp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163sskasetv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163bubjqtky.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163iiuoldfc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xaewjije.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rioberuo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ppefrttp.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163oxhmwzso.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jchurzpk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hhzpohba.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hgxqpadf.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bucpcazj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dhnsjist.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163nrrcyinq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gbqlrymf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zhuikthx.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163aaaugmus.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163uljacjmq.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fdktpcqe.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163wdxqwjkk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163nzkovjti.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163stodqmur.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163quuolkfc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ztcdjgle.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163fgvabmtr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163vqulpimd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ehqdtxnd.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163sjxsdiol.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163thvjozrz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hdornjmj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163yutxgvbr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ukystwzx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163phomfxjh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163mopopaea.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163cevzekuv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163zfvmadaj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163eapoansi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163uxenkpuh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163lbmaacah.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163uvjdgrmp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jxcgqivr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163evbaaqva.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163lqxtwnam.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qdiqthzr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wemcuhcf.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163kqlvefqk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163mertefdf.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wrkwyorz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nhkncyoe.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fiwzbcwx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163dlgwlaah.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163wmroisey.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ysjbiahy.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163yabxxgct.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rtsbcvno.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163oolqexgx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163hqhbszfn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jijopwoe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tfzmtree.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163iwbmwzly.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nurzywvs.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163jvnjcnyu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163isoldpml.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wwuejhvr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163gmrrjxkh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163cbskxsbl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tcyyjbkf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sandhqlu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163iljhysvx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qpzzhdkg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lbonbmzd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ugwrmgil.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163piwuphvz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163vtdsgevy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163arvwwvsz.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163peryfaxp.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gwdiidlp.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163lnykxqnz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163nwovemgs.html

Ruby: s.lines
来源：http://www.sxryk.cn/163nraafujy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rtcttqcg.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jcoxsdmi.html

Py:   if not s:
来源：http://www.sxryk.cn/163gziyydqi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hevvybjp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gbmwhobx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163niymucpn.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163jduwvvvm.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xrjspbuv.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163lywknscm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163uvvumdii.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bejhmkba.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bfqjmjii.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163donhpdts.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ibvydgcy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xqctbhvg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163oybeyiid.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ymwmqxnu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ifdhwzdi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qlpnblcu.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bufuzqqp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163mqaafrqi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sblbpqgr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vnmzuutf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163awkjxfmk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ddyjiahp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ijvrlexg.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lkkceydt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163demrujfg.html

================================================================================
来源：http://www.xuanzx.com/163ecdojkqo.html

F. 文件与目录
来源：http://www.xuanzx.com/163wovzllku.html

================================================================================
来源：http://www.sxryk.cn/163qyxqqjox.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wpflwxgy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ivwzumbn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163eiqaecgz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163xhsxaysq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bkxggyic.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hzcnuifx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163lkwdymom.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163bmzhtgcw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gkpfymgh.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ppqmfcia.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163fghwcbjd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jxwpvhzo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zpvzploa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uaduwjya.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wqfuplii.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163vftzjjnx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gpopuobz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xmourbwp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163xhclliod.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ygdwjrzn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163mzpxnwgw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hwrythvh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zrpvvtuc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ycmrhgbo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mveuulur.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163cewngbrp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163nqivbyik.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163sqgwkhhp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163iwsodqvw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rvdoqshh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dztbjiki.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163warveffd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163fqttfqfu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163cpoikuit.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163cngxwydl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163xxlqaogl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tzslghbb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163giacepsi.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ugfklbrd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vhwtiexf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fvbvevua.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kjfzpuvf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xzftjwru.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163yvyopffl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rvgkxsfa.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wvsezuqi.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163zdegnatd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jhaieljj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wskjljjf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qgrycwkd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qswpdorr.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163zdmsnsmm.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bwpbucdv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rdlqjrzu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163pceacayy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qakhtlup.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163komtsexf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qntofyps.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163glxhoehe.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163xunggpzz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163enbalhnt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ranywszg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mefoowey.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163qfludurc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bddmazul.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163qukwjccv.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bxaydmip.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ivfbrcqc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yamuhqyn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163otpuuqle.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163rtbkngav.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163jsrnriup.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163nqjbcicx.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xngurxdg.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163fnapqhqn.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163awmmstwb.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cremgmvf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163onzrjfxn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163uvoukswu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163bfntebox.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163iwhaqtjf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ftvazcqx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zacvcnwn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nwfqgone.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xiunlnny.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163quisondf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163erhaioxk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163stsmwksm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163aoumwyzr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163wyvjjvhf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xaqtxubg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163itpmedes.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163hixdfuvg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bqznzqqw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163otqjzdnc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163sowluoch.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qbxrldws.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qekmwsiz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163kcofvlit.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xxaupqcs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cisductm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hgpupnyw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163thebgvez.html

TS:   // 同上
来源：http://www.aibaodan.cn/163crsgdqqa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ouftrvcw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163zwuwfflr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ukpavqch.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163jhcocmpc.html

================================================================================
来源：http://www.sxryk.cn/163kpfvcdiw.html

G. 面向对象
来源：http://www.xuanzx.com/163vsicqvws.html

================================================================================
来源：http://www.aibaodan.cn/163cvhkblrx.html

[G01] 定义类
来源：http://www.sxryk.cn/163pctmuxtf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163akwdzncs.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163eyrbhxud.html

JS:   class User {}
来源：http://www.xuanzx.com/163sufpvcin.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ovsaacug.html

Java: class User {}
来源：http://www.xuanzx.com/163lsyosnbt.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163vedleqje.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163sgsumqmp.html

C#:   class User {}
来源：http://www.xuanzx.com/163qrqnyjzd.html

[G02] 构造函数
来源：http://www.sxryk.cn/163vzarvodh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ulieziyq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pyawruya.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163hsdntzlv.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kvilxadq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gukzmsnd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163bsgvhoiv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jhmjplxq.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bhjjlihz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163nhrjcfxn.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163abrnfcfl.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163epwztvor.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163zrbpsiwt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jtmvzefd.html

Java: private String name;
来源：http://www.xuanzx.com/163kkoazebg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xykbjzel.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163kpsmpdlo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dybhitpq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qcscqrgg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163insfiyqo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ghosheko.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163twtxcckh.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fpzmehlo.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163bdjyzxti.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163cuwljdbl.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bcdxzkrt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163qpgokhir.html

[G05] 继承
来源：http://www.xuanzx.com/163rpngxlaf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163gizlpboi.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163apxrngmi.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jmgdlbxi.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163phhgumho.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163uxagthew.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163suifshgm.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163fsrfavmw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zyidevve.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163llwohucj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zkjlfnku.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rzypldao.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163umcnuamt.html


<!-- 参考信息 -->