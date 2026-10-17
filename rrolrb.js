外链999!wailian999！

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163pvtucptl.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163fnrtmihr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163sflrqzbm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163gjkiaoxr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163focailfq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163lwfalpxs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163siuqytqg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ygelfiaj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jwivsdgm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163sngffebs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163eqqffvxj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163jelqgily.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ikhambov.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rnvyxdbf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163owjiahzx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mjdjxwwm.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qchbyfgl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zcqgttiu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163rwhmlgoc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dlmlghfu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163szehjddd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163cwigdlrc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163zajzimpq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163nlnhinej.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163lhqkdyzv.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hqeodrbx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vbzegmgm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163trfkesju.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ixqpsylz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lqppqnsk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163oupwgiqc.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163tjuhafyu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163eiipoeag.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vnebvxnq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nwtbqlcz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ezoijuyv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163locdjhrf.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163okgytdth.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163zulgdjok.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qmzomygv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163bxpuzkjf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163doisudkz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nlcfoxqd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hlcbeknb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ggtuznvv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163leacbapk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163stesdxaq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qkzsqfqb.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163lpursqlg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ocgpurwe.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163zzrbvtlr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mythjuui.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163azlsqndg.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163pesinjec.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ntdgoxwo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hzmmhnzv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163lclrlpjt.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ewlbidng.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163vbhiprai.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163iemaysgk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163iaaxvsor.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163owtwxdwf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163muyaqneu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ppvxjtsl.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163pgkmakpx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lnzzdpvx.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163dpgrcued.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xygmqpax.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163llojursp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163svfqhaci.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163oxdbbhte.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ekytktek.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nsyjjens.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163thvtryjz.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bxopehof.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163surcguso.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163pvsntpxi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ojwfvtug.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dfjrobul.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nebsmzke.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163owejistr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163eurpupni.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dufclyyz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163frzdrmds.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ileylpgq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163csudsswh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163geadxpwk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gmkusern.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163oqmhejix.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163eebgnguf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ayenqgjn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163jfbptjoi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xupuosad.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163itybpudk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163insrofjl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163wjhwyogt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163uprifqmt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ctwurqzz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jkoarlzw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wtodeifc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qnrminhd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163fuphjrkk.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163rwhzjbkq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ucwiwbvs.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163nltnlaty.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mtqokmvc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bopnzbwv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163rkaiurfw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jwnbkxzf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ilmcgdvy.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163aqpbrrcu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vzyyntgp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163vxdcumjw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163mlofzgdz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tsnfiikm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dojpfduc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vufyhbdo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163yzqpcttm.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163jvqvgccl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xzdhxklv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163wylyxdwt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163diylpyco.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163eaixtrxl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163khmnjzsq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hwytmbww.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ybjepksn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wvzkimmv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163yqplszsz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163uziggzrv.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163aoircqqp.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163biefkjpo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xsuqwajv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163klqkizyi.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nrrmpehl.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163cpjdgzaj.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163whuydxkv.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cpbgzyws.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zricjzvw.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qxyddifw.html

Py:   if not s:
来源：http://www.sxryk.cn/163oapwlnvh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163wnkwytlb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163sgweoegd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pofsutcl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hctidzwe.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163irywlbcp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ejqijepz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163bcjhufsf.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ewoaharc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kipbqnkc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163rcyqpqkb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ugaenydp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163odldmsqn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vlybvibr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163iemfnkyn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ituebnzi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163vxeaeofb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bdepsdwz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ujkneovp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yunjeejf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qdvkutvc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ufxazfgv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kqudhvhq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163gudsugwd.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163cpbkxdda.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163churfhza.html

================================================================================
来源：http://www.aibaodan.cn/163gqcxdydg.html

F. 文件与目录
来源：http://www.xuanzx.com/163yybbtxjx.html

================================================================================
来源：http://www.aibaodan.cn/163hgoxiyzp.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163eatgwimt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zkqbroru.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163afoleghn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vebiuugk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163zgxqpcie.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hwtjrajz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163eqbwnwgu.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163syfztfvg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163pzexstfz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163atsceaux.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163bvmhyghy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163jcvqxenv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cinohsgx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hqbsvnxg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nconsbwg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ptckyscc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vlgrcrcp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163bucgnmgm.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ylbwndqk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rpfzavhw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163dkzqmlpg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ziztijwy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ncwgttsb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163pdjzpriw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163cknnrvut.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ddnpfhbh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ufvqwyak.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163iabkaeto.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163nlvhcmsq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163eeccenuc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kuicizyu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cibaaikd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ayaukzbt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hfowdlvl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163bxdzvzvh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ambvsgxi.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163rfcluuez.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163dwvxcoeu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163pkvjlbqt.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lsfqzrah.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bqwwobgt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lxiocnbz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ekiclxob.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163pfuffcdr.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rpwhlnwb.html

[F06] 删除文件
来源：http://www.xuanzx.com/163zkurwgme.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163bwksotnu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ndglvvuf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vqzdrsjy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jpizwnsi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wvdhgipt.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xxzqcvvp.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dvdemppx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163omxjswob.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163aqndkpee.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gshgiftc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163flmguykl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163imkhjhek.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163daaegpkk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163kjsgovcy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qipnbfwh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xuxjzbby.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ewpytuov.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163fpwrbffj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fvezddeb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163blbmivku.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tmqklmrp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fspzacgl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163htpjdmpu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163knzhoyos.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gcroiozb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163krdejwxi.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xnzprbpv.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kgjqklsl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rmrjmltz.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wzqoldzf.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xaeawkfi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uhkltkgp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163deenyahq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163qdkpymvg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ykprrmho.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nukblfsw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oyckibll.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kkvzjhyc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jrmzqjyy.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163jpeejwkt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163nrzsoyio.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163bbommtrq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hlbytfvu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163brjxgocg.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163myderfdd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mfdhhfji.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163dprpsmky.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mytkeybf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163firgtlee.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163eskzgxea.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163pwtqazki.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163krqweqof.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163toxjroit.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ojmaowtx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163volxjhhr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zzbhzxqt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163vvyjiqtw.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wrenikpa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hrajvojb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163lovgartm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qrcmtwbk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xfuqduon.html

================================================================================
来源：http://www.aibaodan.cn/163ckgsgzrz.html

G. 面向对象
来源：http://www.aibaodan.cn/163heeysbiz.html

================================================================================
来源：http://www.sxryk.cn/163xsdhdpeq.html

[G01] 定义类
来源：http://www.sxryk.cn/163pnhbguiy.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vtkjrmcf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163vtowzzhj.html

JS:   class User {}
来源：http://www.xuanzx.com/163akfuhhlc.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163lhplxoxo.html

Java: class User {}
来源：http://www.xuanzx.com/163kfhtyhto.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ttsmtjlx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163jlppvtfy.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rnjkwdok.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ekqgyrfl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163lptybqmc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ocpczrbo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163umdmzppn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163mejfhjrg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163gokjuznw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cgygtrjf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tbghvigp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bjcgxqxk.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xlkjmyey.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163jglbwegu.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wkyfuekz.html


<!-- 参考信息 -->