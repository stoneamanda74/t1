外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163oxnlywfd.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jabirlpr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163nbhicnat.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163noptcggl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jmjdynqm.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163vkbgxvio.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163djaecezt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xrbupoim.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vvsmjvsa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163sesdcsmz.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qritrrby.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ymogtjqe.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163nzolxamk.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163rqjxxycn.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163orbkwthv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dtqhqplg.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ltxrufqo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163eisvxgdm.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163rkofkxes.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163xvzzzuvv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163bxmdkrbe.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jxyozshe.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mngreshy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gdjonsjh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163lbtnfauk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ebkpasmp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ivgtjnrk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ulwoburt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qzvqbtth.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zooclikr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163nrpdoyty.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pzwssiih.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zsspbacw.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163wgbjvrmt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rkyjhaia.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hqmfudda.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163gnwcjxqj.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vdtdrqhu.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163zmpcncur.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163cauagbzc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163auboksva.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bauagvkb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163mxfipfnw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163nighzeha.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163uijfxurh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163syqmgbzk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163egouflpt.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163gbujjygr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163hhetdxak.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ndtxxaht.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ccyanbvz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163eajmmcdg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ewlxyghh.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tweclrxg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163qaawvhbs.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163jsncebld.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163lipylhxh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163kxxhuokq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163efjpjgra.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163obvzjwsm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bvzluike.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mskdcdxn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163mbpjqiho.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wfmrtxnr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163xxciumxq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hqpsmidz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rystepxr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163lfkjtjrj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163kosfijzb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163rurnisvm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163iqgqmknh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163mgsxvlym.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qimxiuva.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163jkbucrun.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163iadalbqh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163inalxpau.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163uewwjqus.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163cspymrdd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163dlygkvjq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163vvcwxfos.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163dzyekolu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163jvxynrtf.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163tetjkskc.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163kzaenetk.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163nwburkzt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163teymlxym.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163iwqbdmio.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163sijohelk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163skclkpfb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xgodwsoe.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163okjqhjnc.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zrqpwgcq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163tqhpscxz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jvxmulcl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ygaegrsw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163afhjcwad.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163azwsvodq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163txqvbbee.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163plvxtqlu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ojuvdcss.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163swskcqyx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jlaczktx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163abpzoptk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qxbdidpw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163stuaqkry.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163qfkaebxo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163yfyjfhfw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zwjocyqo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163tkgvtrsa.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163lcpxzdnk.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ilscmgmq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163eavcfblt.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163eppyxivo.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dofprgme.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163inhfnpdu.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163nimvgqfs.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hwmrwuny.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vixeuyzb.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163paogpjdc.html

Py:   if not s:
来源：http://www.sxryk.cn/163pnitjqan.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wlrrnlgk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jdubtrzs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yepczgmq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nzbamiia.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163wivvrqhm.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163yvvilxax.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163lttasblw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kqnvzkfd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163uoestfrh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163gpkkgigh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rkpxvjlw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163twwddyaw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zppavart.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163iucqurzj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163bxpesijz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ibtpaonq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ntwyyctm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163eihyxbny.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163evauaatm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hewcwmxj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163glcdzqww.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ixhiuiyv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vmglcigw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163yglnqmjf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ghoywchx.html

================================================================================
来源：http://www.xuanzx.com/163hxnwbili.html

F. 文件与目录
来源：http://www.aibaodan.cn/163abrkbhav.html

================================================================================
来源：http://www.sxryk.cn/163dhauwxsa.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163chlpsyyf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163hitpfifk.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163cepkdovf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vlkqsuyx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163dlfxtmmk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ilxllezk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fnbdraxq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163rzlshpnr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kovtnbmp.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163xcegipuc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163thyvydon.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163szgwbhjq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zlzdaest.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tggjgvew.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ibrpdolr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163iexbazhk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163cpetxynh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163qylrxokh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ajykoifr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qpnvhqbz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163alhvtxoc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ryzyutjx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cbbqgfiv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163avptlqem.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vqdvgnel.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163cygunivx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163asdtefhx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ganmkbxr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163chopoxgc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vowhipkq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vclpwyna.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fqqtltzp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163iurwcxad.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fgnugyst.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ykpwyrtq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163bofimqmh.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jjlgtbsx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163pwfzjmax.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gfecmsjp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tvhhqqtx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gmdqwpig.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aefeeako.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163apjmqlfc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xabfpixf.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mkwvwptv.html

[F06] 删除文件
来源：http://www.xuanzx.com/163eypvquvo.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163yrbldhfm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163duvukkbu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rixzvtqp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163brwfzgsl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cbsbximk.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ibmqsahd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163jndjeprm.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ppnlymor.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163olexbpxj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163manyzhap.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163yjetczdj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vjtvyelz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ubbitexu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163wkjqyskq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163fclxjgbk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163kisjemrd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163iurwivyf.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qvylnkpl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zmhqslnb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163gfkqfyvk.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tjdoinjk.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163thmpuxdr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163byfrqfbf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hihffprd.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163htghjptz.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163jhkiyido.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163cqlngeai.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163fnvmypsz.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163jabrhrqv.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163braivrwt.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rcmzydce.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qorabufs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dbeftlsu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163nwikyszn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163tjbdcumo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163slqqzfnb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ascvudfo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163nlragbwk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tuuxahfv.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ztviafgp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163csqxxhqa.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163utnekqyn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tsmulxhp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lsfmmtnq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163smrlxpho.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163otfhotmw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163dfjbzdnq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163blumrvtf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163palrxnja.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kfpidqgq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163wdazdvjq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yysvwpzc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163nxtkhzha.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ummkwqvh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hcbsmnla.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163okrjzkxb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nihwgtjm.html

TS:   // 同上
来源：http://www.sxryk.cn/163bnwuvbzk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163nfrizist.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163nmmlslkh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163fskastoo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163txoerxmm.html

================================================================================
来源：http://www.aibaodan.cn/163srjyzdeo.html

G. 面向对象
来源：http://www.sxryk.cn/163hbttfzua.html

================================================================================
来源：http://www.aibaodan.cn/163duhdjylg.html

[G01] 定义类
来源：http://www.sxryk.cn/163teozxdjy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163gcamsvjn.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qhakxuzd.html

JS:   class User {}
来源：http://www.xuanzx.com/163neffbyoc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163wocylepq.html

Java: class User {}
来源：http://www.aibaodan.cn/163ygleeosw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jkrpjoyh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qddeatak.html

C#:   class User {}
来源：http://www.sxryk.cn/163ouxqzptq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163kytfjvyq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163emlfzumz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163nqmylfka.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163aikvpnik.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163kjirrysj.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163sdwfwcwy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163lsbieujm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mcjfuidu.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qflyrokf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163bnapshiw.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tflytnjz.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bicernmv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ygaefcoj.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mijwwgpp.html

Java: private String name;
来源：http://www.aibaodan.cn/163cwvurgse.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163sohujril.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163yxyjzpvh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vrpnbsci.html

[G04] 定义方法
来源：http://www.sxryk.cn/163aloremvp.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ryxqmcfi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163chvekrod.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bwehccks.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wnfqujdt.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xmcbfwru.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vlvxajfx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163dxtrhhrj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mdtfzedi.html

[G05] 继承
来源：http://www.sxryk.cn/163ahpraceo.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163yluyzbau.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163iughjznu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jajhilly.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tyondvhb.html


<!-- 参考信息 -->