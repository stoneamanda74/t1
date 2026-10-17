外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163yvxgfgtq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163cfdzdyzq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163kuqubeif.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163cytxjhsa.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ydwuelnx.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xmmyowpq.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dkmdxztf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163uujplcsg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163smglgmhy.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kzfwyxdj.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163arhocuur.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163sdxjgsjk.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163piagznpv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163sktappru.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163mrbattdu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163nhgwnspm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qbwkwfqa.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163upbyzobg.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163niayopsu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163sfzuszuw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nryrtuos.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163qhmbpwwa.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xfckppib.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163mbrexoba.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163byyxnxvx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pzbtlqhe.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163uxkwcxae.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163bzkrfdyz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163tzkxaaat.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xvscxhby.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jzejorsa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uwhkpnur.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lbpugtda.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rwzmhwrf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jjchmgrm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ddgwvick.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hoejoinq.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163dvsnaicb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ctbvmbun.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zyesuqel.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xctziiex.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163qcovasof.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163hybhooqv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163mplezoes.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163fmjstsng.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163acvgmlob.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163idzeflei.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qlmhgfwv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163frudxjfp.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gfzvycco.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gdckofse.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163galnxncs.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ddmlptdi.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wzpukevj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163uyxrzccm.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163uvhgjuoo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ugqtgfxf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rqsglnuu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163slnmiqos.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rwprslwz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163tfgbnrxf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163uxqckdbo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163hdkqdjbg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163reesdbaa.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163esjrnbcz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ydayktxg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rcxkrffy.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163sjomhewn.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ztfwnbdq.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163yhvoxkah.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ruzjnkkc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163voqyrtwh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163nzcyqypa.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163sifslduj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163obacyshn.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ibzyeaqq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nulhfhkl.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cjjxwyam.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163qsxtuvvh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wxfuwfmh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163utmojsya.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tytefnep.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163sldanbpq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163fxrfzkdm.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163vjlapgfn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rfitzkoe.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vnrfgscq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163uepwindd.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163szhrvdru.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163iaxarmua.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163irsmqbhm.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163houfffwk.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ptbseabh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ddyjwisy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163eggrsxvr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vgzwzgkn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163idyfnfsp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163opcoebbh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ljmddnen.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ucjxerjr.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163qlthnkql.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163iedalvip.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163yuctxqrs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163xwddwlge.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163jejvzpux.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163xcatbffk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163nvddpnmj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163etsmjqnu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163uxmhxzfj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163rkbbfceg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ekznnstu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mqryqyhp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163lkggpnky.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163yvpuylpt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163noxirxrm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163atkvxunp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163aklnfwwx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163onzcoskw.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fixozewk.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163sibwvlyi.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163drqcryzt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163joeyhpfw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163otapzsdb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163dvqkvxfy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163lljnouox.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163wkrzzxhf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163szgbptrv.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163vmtdxvxh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163bvcjoumw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163wkpszmou.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jmnacubs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hvhopsja.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163auxdxylz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163erwkhvkr.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163dxzxzhag.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163fxmqrezq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hswuqiph.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cfezcbhb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163fdqjxgzl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163oknpjpdx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163sxqsamnf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163fzjwnmst.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163itpuyutk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163rvrufxtf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jkwcnjvn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163aykejjnp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163xnoyskrz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163prrvianh.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vrutkjdw.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hbdxzkic.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163jcbfygrr.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163atafizyu.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163gdzlahhh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163cgikqovm.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ojwujesu.html

Py:   if not s:
来源：http://www.xuanzx.com/163stssbkeb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163amqovsju.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163horxyjad.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wkgihspk.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163kiepidrk.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163outrvxyv.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xtyfabre.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163wofdvwho.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hrepidsx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163kfxssanl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jxtceelc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163arkyxcqs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vfchyofk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vorinrbq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163gazjwxpz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163qodzmcxk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163pcehmpcu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ykcdfygl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163mtoazelh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cblhdxwz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zeypqfnj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mdimqjaf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qeybyxpp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ftmmqznb.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mbcffdfx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163tswnwbeb.html

================================================================================
来源：http://www.xuanzx.com/163pratccdl.html

F. 文件与目录
来源：http://www.aibaodan.cn/163mrcucxgd.html

================================================================================
来源：http://www.sxryk.cn/163ywqemvsy.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ikknfoir.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163yartjaew.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qidluzhi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nxpjyuuw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163bqrjwsda.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rphbrdsh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163tltxjpzy.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163uhccgilx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163svecandc.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163sufuwzlg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ztisemgh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ddnslvfp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163eyicwuzo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163igzwdgvr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kwmwhsws.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163eprqnwxc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rfhynajn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vbisryvg.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163inoidvjh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163abpjhdis.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163fpeltqgf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tzqmryji.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ksuguylg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ycohvbov.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ctxokxvx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163iflthrdn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163gidgtkqn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163yqpwcpeh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163bkhtzqhh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dyuqeoew.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163actfdzha.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jmnmidhz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rwitryrb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163zppqtlbc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163oqjdmrsz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qbzgyymj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163mdgvbchv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163rdobymux.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163lemhddau.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hvyvldtq.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qtkrzobw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gyilgbpw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163orwtmgde.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163papjpwgm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jiysbcpi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fphooqhh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163uexmegup.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vhjgsfsy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wuzdfouf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zhnfqsvv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bkpfleui.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163zxqrabbc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163qtwrtxgn.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163wepnvani.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ssqhyelu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163mwhceopi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163udrexetl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kmsrebjm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yuywpynb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163flzhqkof.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163xvliprwu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163fmpwelfb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nmuxgari.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163cnsjoxgo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163mvmpgrzs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rwfavzuc.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bcgdqfui.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xmyrujlk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qadasbzy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qrhicgea.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ijraolqy.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163vsnkldkp.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163yiwxqwze.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qbgiangn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pcashifk.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wadeyzqm.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ovbyewbp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ppsvedcq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163gexmjpaf.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163bnazidyd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163myebsfie.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163nozutscu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nvcoetfz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zycawmfr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163frogdcdc.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163hkqgfkel.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163uoucmgqw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163qmnngbvh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jljfpfes.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dikpopgm.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163tjlkgznn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163niybevdw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qvaxkghk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ckzfygnf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nhlfgnoi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163njibrumm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163akvndcwy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sxemcqmy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xqgdzbca.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163acbwagdr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nphmtzhh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163iliahxni.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163oagufrdq.html

TS:   // 同上
来源：http://www.xuanzx.com/163rzehwxuw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mqgmovdv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jhqyoktw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163vnxdfjgb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wilfgdvh.html

================================================================================
来源：http://www.xuanzx.com/163mkuxkpah.html

G. 面向对象
来源：http://www.sxryk.cn/163qukpfrtl.html

================================================================================
来源：http://www.aibaodan.cn/163jlhfmlnt.html

[G01] 定义类
来源：http://www.xuanzx.com/163ltbjwsoo.html

Py:   class User: pass
来源：http://www.sxryk.cn/163oeqtqkqf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163rpomfduk.html

JS:   class User {}
来源：http://www.xuanzx.com/163jvbrnsoi.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tzuublkl.html


<!-- 参考信息 -->