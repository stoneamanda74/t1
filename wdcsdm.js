外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163cpveazaa.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jagdxbpu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ctwyrcxb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163flshchki.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163aqrnlugr.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163aqsxffwa.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163opilftga.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kuichuug.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163cpdrabxo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163dvqzijgc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rtxcajhe.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ltkemvda.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jvpivpve.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zymqtcfw.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163wktjlwqk.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163npbipfgo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ygxosfwx.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ocyxwrmq.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163brdfbvpu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mrrpadbq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163zqkqnwub.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163blbfohah.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kfxbvras.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163egdgafoi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pekkslms.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163iybmfyii.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163stupfkls.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163xgsrblps.html

[E06] 替换子串
来源：http://www.xuanzx.com/163lyrzrajv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zruvjztk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163rrqnxwcc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gxxtnreb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hhqzzezo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163euyujfyi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fpryzpvu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zpkjuped.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gverdvjt.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163bnhetfse.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163vumqunsr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ooncjqbt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ngyszeiy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163tajzehtz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163aidzcrvj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vasteejf.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163nspxwlea.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hneqdkps.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wzweaccm.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163nutydlkd.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163yytwrlte.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163veiadddu.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ztmhrfvx.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163tonthbpx.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fisuganv.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163vghuvfxw.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163akerrjde.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lykkdtsm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gerboqbn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163deychvwz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ihgddeos.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163chtckrtp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163utzeqiqm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163wqcnpvhl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163xmpnvzrd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163zuiizsko.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163nlgaxrcw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kkudlnmn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163mulmfvhm.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bgdlgzlm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rzuuwesj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163altbwiul.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163wqcbpjqr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163pmidhksf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163gbwxnjpw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163lbqltezb.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xerdavds.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163kxmvrlpg.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xzfgmgle.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163clqjpydf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163blpnsmww.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163fmfwjcaa.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163hietpyyw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163glnmnyxg.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xphpexbp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pbqpxprm.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ggsdybkf.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ncomjnzo.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wxwdzwbu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163nsbywqxg.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ubzjtfuh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jkhrquyt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163jwhjhyqw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163nhtlpzyi.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163iplsthqo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163lifiwmyy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dwejvniy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bicrtiam.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163gaypulvs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hwiapwgw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ndpyngle.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jewyzfmb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rtfpfeei.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163idirdcyy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163zwbdolcg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163mpwergce.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163emrkffvz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ouhtgcik.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ekbodpvv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163kzpomhjj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vgbybsei.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fhvyumah.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163brbzelyf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163nrvjanff.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163axaaebds.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163fedytchp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163aivbrlhf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zftogriv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163zndzzljl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163kfczzyaq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163objlbtsb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ozaitqrr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163jidivais.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ufwpljpo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jkueoqhc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163mhzqkzug.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ttbatwwu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163lxeycdch.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vxuuavxs.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163naxjzuhj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163lgyujvxw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lcwrbcah.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rnpfcsxz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qilitias.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163nzmpnean.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hwixpgxo.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qieejqob.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163aeajpdff.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163hmjesvck.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163neampvfw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163pvmydtvk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ubxuceqq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163twweaudy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163iftdnuul.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163somnmvpb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163dwaqgoiv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fqivucap.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163groondam.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fslisoav.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163lqdniapq.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bsxsxpmz.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wcxciyue.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kwvbzdam.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163qxeylwbm.html

Ruby: s.lines
来源：http://www.sxryk.cn/163vdftchyn.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ecdrhnxy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163enhlxqco.html

Py:   if not s:
来源：http://www.aibaodan.cn/163twklgcrf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ndqsupzk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rohodhec.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wixwxtbh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ghdqxcfc.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163akehdxpg.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163nexfsogl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163gdbbfryr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163menhknxx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163rbfzgcku.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163uvctgfxw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ojlcdmms.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xqaezjsu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fktdlaie.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163cnwwyeuw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wvhmzupl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xwqwhkrm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bpfmxxqu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ikbbnqfu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mypekedg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fxgbztwr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wrqrmuxr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163vsscamof.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163evbqcnpx.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163cujxroua.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163zpsshvxl.html

================================================================================
来源：http://www.xuanzx.com/163qquitzor.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qvysdxbk.html

================================================================================
来源：http://www.aibaodan.cn/163xbdqzxij.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ffvheyla.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ecspkbmk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163eeyxvaxr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163bmsiseak.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yovpfjmj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jurffybq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163nqtuvbjw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163wyrccwji.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lepbqklq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hxsosuoo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163mepxhrcf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163dkcmxbjd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sjnstfcm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ykxpgyqp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zepkpsne.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163faccqzgo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zojtsgyw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ryuomhzq.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163nkgbtvse.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zydldizr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xlrkaalw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163caihrvpd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163quawggkp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mgxiqbhq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163odcpbanp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pfyvtjtl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qfxylhgh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qapfwllh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163afwpfxgt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163prjugqpi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hkxsybwb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bbkffntn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163inbmekqx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163myjracyj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163wzxqgraa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163skmbkzgw.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163oensutpc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163pjgoscde.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163mopjjcpq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163eqepgwes.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yihiuikm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xwvpnmqs.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163sulfzcnz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qgpotmjq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163xqxnavyh.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163pabewauc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vzaxcnmb.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vywqsgvu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pepdvyvu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163eaarurrl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mvnmcobk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163iwvodwav.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mnzzwwta.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163diowqyvw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ideicjhe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163vjvgigyy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163lcjtktob.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kujkngwh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pmirkfya.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163wvajbjwr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pyfapfef.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163updikaed.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163pcnwffrh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163aihticag.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pwwinasi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ninpqgpp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gghjqpsk.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mtuulclc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163aihdlvwt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pfowuccc.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163erfjaspz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163llmpmwhk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wjfmjkse.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163cchuyywx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pzssqmer.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163szthvedu.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lqrhpbaz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163podypegg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ziidaohp.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vfcajtda.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163adlehgjp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163heqaxaxu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163omquqvob.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163zdhkhilv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rtneuupy.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163kromyhcz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fqwthkug.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163mnelnhow.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uewtxwsz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163omzpgmug.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163nithbigu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nfloocqr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163pgbsuasz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gbnakxds.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vjklfiqp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163euguvkxx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ywxsggym.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163msbrtvpx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ogvjyuke.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163tgnocerk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163enguwonn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qvsvfmtk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zcktebdb.html

TS:   // 同上
来源：http://www.sxryk.cn/163uetocquj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163dqvyhfzr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163msbaimat.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qbrxpnxe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163evslbnow.html

================================================================================
来源：http://www.aibaodan.cn/163ctpeogml.html

G. 面向对象
来源：http://www.xuanzx.com/163imxkyinn.html

================================================================================
来源：http://www.aibaodan.cn/163mhcymhar.html

[G01] 定义类
来源：http://www.aibaodan.cn/163xifjacat.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vewnltmr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163abmtuvot.html

JS:   class User {}
来源：http://www.sxryk.cn/163tvcgenpz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rhllkgbu.html


<!-- 参考信息 -->