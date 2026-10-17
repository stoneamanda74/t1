外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163zbwfvckp.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163gxvqutak.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163dpgtrmjb.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163kxnwpryt.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163nglmiwja.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163pwwiwlqk.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qajopvdd.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163pwlkogpm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163oubcfcfa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163khmzsckl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ohrmbzln.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sdenabms.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163vnbafsle.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ljcymcod.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163tslgdxmr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163yvbglrwu.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163wbckfyvt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kofrgvou.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163opijrwjt.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ggzszyri.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zqsfbhxh.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163cppjoxbc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163niuzkwow.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163dbwnqrsk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bmzlqxry.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wziguzac.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ihuivqnu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163evlmxpjx.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mngpizhd.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kmdadqfb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163wzzbelmd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163rqbjfjai.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163bvxfxaru.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163whrimjau.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163sgjopjpg.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ecwqwxuc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vnamwzdf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163skstfymq.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lfxpddje.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163fsfbuclc.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kygtwiyf.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163lyazcggn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zjqmiglk.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163wkzqcnpf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163agtiivcr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163extsphwe.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lyoxyqrc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xhdxoakn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jxlyivgn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163wrtingls.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163zkvqmnzg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zzblcfhy.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163puxqsqvv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163saoipoga.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ijrxxczn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rkoqbwcq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163jzwibwls.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163gogduetk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163aqewynzv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163lriqynln.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163kelqxmim.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163paqeoocs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163tzasqqbh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163imgorrxd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163kzatejeo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163iyoioecx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163yjkqpdih.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163scahpdwn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163srebalgj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163apcuecvn.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163crgibqht.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jgupmlsv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hkumyyby.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kwmjejvh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nrshpafo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xctfasaq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163evylgedn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163nnojpbfa.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163zddcvonc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vumnqsnw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163kyiodjvp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163vtuspzxz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vqhyfbvb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ljzdrdug.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wrkatjxh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163julhmcbd.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163fjkacckv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163uwkgatyh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163jcyhnoad.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163bacvarqy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gixahdbs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ymsyvone.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zpihhrqn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163liipgmug.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163fruvmfju.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163otsyhgsh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wrhrhwyp.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163okjtlrra.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ardpewea.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163deyhuxru.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163sqbjlqmv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wpqpsqfm.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163cgstkrzc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zwsawfls.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163urcelcfi.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163gevalynr.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163riatuqia.html

Py:   if not s:
来源：http://www.xuanzx.com/163fvfsczsn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163djwbtuhp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163zalorfyf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163dtnkeypx.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163mnfjnogd.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163gerhnwil.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163lenuyobl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sbbusyzg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163tzmsyibm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163digstfeb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ifdzurmf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aulxrpne.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lpzbyxmh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qqhkhumf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163bxseflbp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163edrlyken.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ntktbekp.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jqjfajio.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xihyhomi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gzkqbsjx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jamdvmwb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163aojsacbp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163tsesftvl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163tszuqvvw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163abyswajv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163xjawbipu.html

================================================================================
来源：http://www.sxryk.cn/163ubzhomnt.html

F. 文件与目录
来源：http://www.xuanzx.com/163mgtxtdwp.html

================================================================================
来源：http://www.sxryk.cn/163nsqmvmnt.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163bqrlqhmw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163aktdsrls.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163iylgzywi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163lnnykkgh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kmwquxto.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jjymhtup.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163msdmqyak.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ybefdjzq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163wmreeasn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163oixtwfpi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qepvndwx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163fdolwbrk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tcyjlcra.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xnwzyqgl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zvpvtaod.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163tpfyjjun.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163emwcmaby.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163snqamsfo.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ubqmbspx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163kkiwztsa.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163trnvehbw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jwywatgf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hunolkjb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163oskrkvsl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163odcsntng.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xnsfibwh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ozksestm.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pbefjmkh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163atkvfuuj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163pbdgouip.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pyuqrdjz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163aecfdzhi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163hktdlehm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163aztfmhiq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163rcmwgofb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163cfiycyge.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163encwcjol.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cmaknxti.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163gkrguhqj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hpzfgjnm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163oedwfeti.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vtogbjwq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163humntles.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qimubjae.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163itmtwbvx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163gkaajcfv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kkunfnkz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163tumwbdaq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163viwnparb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163oflvrvbu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vretsfky.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vwanagnn.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163lfllhkbh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163whtnmygf.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ovssyxby.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wzrymcnw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163enpgjefa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cnrqdrnd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bwsyxytf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163auifpkyi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163reotxwpa.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tsbpkoow.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dhpgyrvf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163fytjkicp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163qdtfmlca.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163iqessibk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163orvbruky.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bmiihmrj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rcvgaabk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163srwfufcj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163vzsvwltw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163knlkkale.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yjcmplwv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163txlswkgv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163nyyrcyhx.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163plyukezl.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fhjrcvdf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163glruysnk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ujgeuita.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163aqeszvoe.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163raaggtwq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163fvbftohy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xgxwvjls.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lwrgfvcl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yupzuhsb.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163txvprgxb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163oocnnzed.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163iyumrfev.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hhgwqbta.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163sywyicni.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163xwrthcni.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nkybwqqv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wyuamucr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ulnlqaap.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bsikmslc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163kfsoubzd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vhdkqqvc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cifaibwq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tasxguvr.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163qvbfgiti.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xeuesodj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163aomxatpq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rybzsvnh.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tdbcovzm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tnfbelqu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163uisqmkgn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163iwiwrqzh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rrqgyjgr.html

================================================================================
来源：http://www.xuanzx.com/163qdmwupey.html

G. 面向对象
来源：http://www.sxryk.cn/163edwromqd.html

================================================================================
来源：http://www.xuanzx.com/163goizqewh.html

[G01] 定义类
来源：http://www.xuanzx.com/163ndxffyso.html

Py:   class User: pass
来源：http://www.xuanzx.com/163legfgwzm.html

PHP:  class User {}
来源：http://www.sxryk.cn/163gaijerjd.html

JS:   class User {}
来源：http://www.aibaodan.cn/163hmbxhnin.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163chsktwwf.html

Java: class User {}
来源：http://www.xuanzx.com/163wkqhvpfl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163roojvnsu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163rkbjprjm.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xjknctwq.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163klqimgml.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dwgzktqm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163lloyohtk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vsnxljyx.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163epvgevjs.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163utdwwlqc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jbysuoul.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163taxkkmfk.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163opwxzfqw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163kxiqzjuh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ocipgltz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163lrmykebh.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ounijpnl.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163yhnfthwc.html

Java: private String name;
来源：http://www.aibaodan.cn/163tyabkpcy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rzwrxatt.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uhrbfwoy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ymzwbvsr.html

[G04] 定义方法
来源：http://www.sxryk.cn/163uvsekruh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163imvuwbwy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163suzxogni.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163eufckggt.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163seqtlhwe.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163kiwvcbmu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mehdahqx.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163sbguwwfy.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pvrsqynd.html

[G05] 继承
来源：http://www.xuanzx.com/163momtctwm.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163jdfakunl.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cbcibvpu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163snmfmbjv.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ahwlmfwm.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bwpctvsj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hsmpjwly.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163uqcjnvhm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163iianktvv.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jnqyuwji.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163erxtmumj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ynjesrkd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wsnwecyo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ldovelaz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163injvwivs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vmwlsmzs.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nxcddabn.html


<!-- 参考信息 -->