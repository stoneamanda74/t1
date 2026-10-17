外链999!wailian999！

[E02] 重复字符串
来源：http://www.xuanzx.com/163lvqsqrnc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ovtwwlxc.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163uhcombkp.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163eiidfrip.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tcjvtbdh.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mmlpjips.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ewzybuml.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ddaeaium.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ptobxbio.html

[E03] 截取子串
来源：http://www.xuanzx.com/163bvvxvvqf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163itlpeijz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163psfvllfv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163yfqsqfwr.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163fikmanmo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xcwaqsyg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163nliibypa.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ftkivzjl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163kjmjfalj.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163oeufxery.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163dwmajdie.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163pgnvrcmi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163vsbjxgzs.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163gwhcmmkp.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cfwgvovo.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163viiuiquw.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163aqavoflz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163knjaphfv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ijdgdefi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163rcvhyjce.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163fejsbkon.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163madigjni.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163slwugdjb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bhozqrab.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163nuglskwa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163pwkmujqn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163vkimyjjp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kqqckrzz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163trjihmsr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ibrfgdhm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tshllcvs.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lqtfnxji.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163otwvsyuy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163joykiyqb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gudovhjr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ztktixjl.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hphfrltv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163bhfphzze.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xnglgfqo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163pptmwvik.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163echjzjgl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163yyxgvipt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vrsrkolj.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jnmykzmv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dtlfqygz.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163avfgzxhb.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kmbgfvxr.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bcggfcoe.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wygprlsw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163zzvrjsjy.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163krzwevng.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fqkottad.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gqqgnkco.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qsabqyvy.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rlvlczwo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163urglsrig.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163eaeadepv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bzkxtlvr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ivxhgpvd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fuysilci.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gzayhang.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163qrcuuvnf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xtjndqrn.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163oebcvbwl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163gcwpcmcz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rvmvlfjo.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163lhhvvhsv.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yhfycrhq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gkylibkq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dqswurib.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163effgocjx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vpwvlazr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ftwzohxj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163abnappdw.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ytqqkghr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cwfzascc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ksememns.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163wsserfwo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163gynsynws.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tljqzkjl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zqyomoyx.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163pjxmiafa.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163peteymop.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163mjlpsksw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163alacehcz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qchpgqbh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xlnaglbs.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163jlkghghy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163otuipmzz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pmkoxgwu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163fmlvjqyh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163thnntwtp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tolpsmkq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dvxatikj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dtoozmlj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163vtzxdcrc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163loijetsq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xvldtrgk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163xhulmxap.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163qvypznfh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163gcrtrzdt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163guunuqfe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163jmxefrbb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163aadicsku.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wiyqfixk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163qfdjdlfw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163sutsufkw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163eiuisndt.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ykwxqkfk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163aswqxtws.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163trggormq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163yytotqpe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hkzpfvea.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163zqpwmdtv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163roiwtfci.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ukmofsww.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163euuifbop.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bjfehslz.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163tirkmnnq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163xegdhamv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jzijdltm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cuoaqivd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163twhyuqsp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163nbghkcpa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tplesntl.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tuawgura.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163mfkltugc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163loogfgml.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wwunpbpm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163npjjfwot.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jijqmiog.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163xyolsaez.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163qdspdqmb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ddgcjwnl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163cqwgvjly.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163aekyjooa.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ynhhyxxe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163qunwjdka.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163iavfwbai.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163heflwrjx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163rjztfwhp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163sezwcjyn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vqgibijj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163elfnxwqu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163zvlfaped.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163frdtrnsh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qbedgyjw.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gvodvnia.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dpukosfz.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163eacloohn.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163firtopcn.html

Ruby: s.lines
来源：http://www.sxryk.cn/163miwgkezk.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163jvwnaibr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hifdxmoj.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ytzceqwu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jbytrdlh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hkzlelnt.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163blibfzlv.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163tbjyuuvg.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163bvcekrug.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163zgqabqoz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jihofsvx.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tfrprmaf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163lywrldif.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163bjmpccyg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wgtptycx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iqkewzaj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gwssyutn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163dschbegr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xjkjksip.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dqvnuytq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163grminpzu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163yxqxicvf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163aogpnqnp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bbwdtkhl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hgvcqdmp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xotrhros.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163eejwvupb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163zetugtvr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ralirrtm.html

================================================================================
来源：http://www.sxryk.cn/163aumjxhsi.html

F. 文件与目录
来源：http://www.aibaodan.cn/163eqmlybxl.html

================================================================================
来源：http://www.xuanzx.com/163lwwoikem.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163rqqfyxdi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ozdzfjxu.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163cewczxut.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163wcvdafeq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wphwiege.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mkvwtylp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jklanfwh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ttzpoamd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ynjzyhst.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163idisrzme.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163kxgjgkhf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ibdhmvnq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gzwvbtel.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jtebcimo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163sskdhydd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163usyelryi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hhnyamcf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163alhjgghl.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jtsuqrnr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ntoiwtaf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163pzelsusd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163izhbfdvu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163twzlaxtp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163yyhthtaq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lfngrzwc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163phhekcec.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163imyhavre.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163tqblzgwq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mlgimcjr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163cnjpnldp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hwwgfzwh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163efhpedjb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ejsorkbi.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ihgzvhyt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fijcotxk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dqxjnvvl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zkuzpoqa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163zmphszgr.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xpcutpoh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163afpzitad.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sglwerlg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xwffkfka.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yzknrtjr.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jnpavddw.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163yzxwenbg.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xtjbbvrb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163huhyrmdu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gaaxotts.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163timejhpz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yunfotpt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aqmykeya.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bxwhmfop.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163siexovbt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163thhatdea.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163toowetty.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gmygzuta.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163xfmkiqxm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tczpedcm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qkvnnsqn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163bdjlowcq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163djwuotbw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mmkywxzm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163efzjdqkl.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163rwxxrxuz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163scilllty.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163potbzsof.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163drkdouut.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163glnrxpfx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ejnchjny.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163perspksy.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163zwbamjbd.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163rdzcqoci.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163rysfxtof.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163iiorsdon.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uvhotbed.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163syudtjdz.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163iiklhomu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tfcvbutv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163iegruvit.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rzioureo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163exzdpxes.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163giuhqyag.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vfhvjijz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163nfnqwdmw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rwjgvuyh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bknyxuww.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zqtdmhtr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jdjjyrvf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163upkzksjx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gsczvwov.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163uwoslszk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163trsrailv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163pvqdqoiq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vhdhxgec.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jhtdaxjt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163alwvmlzl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163umcmezgy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cqkcfomg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163nzyvlfkt.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163toagjqyp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163kbffsifr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163hlvkyspn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dhktqaee.html

TS:   // 同上
来源：http://www.xuanzx.com/163dlgvyotg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ddtuzzoa.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163rvyqvdfp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163fosgsvrd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qbxjdfmt.html


<!-- 参考信息 -->