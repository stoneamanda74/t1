外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163obnbxfnm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sxxjbpnc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163kncicqvw.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163epxkdfel.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163obszjsno.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163pkmcrxoq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hvdzarqt.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tfaiyoaj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163dttvaohx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163owskfjcy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163yslkjmwp.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163plzvouzw.html

================================================================================
来源：http://www.xuanzx.com/163wqixoiyg.html

E. 字符串处理
来源：http://www.sxryk.cn/163xnexmwsj.html

================================================================================
来源：http://www.aibaodan.cn/163yfzqtosp.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163lsieobas.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163wedlfouv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163pvddhelw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pxeaepqz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fpklyhra.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163gdplwflx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qbrftzpl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163feftgdzs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163fpificlb.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qgidbjwa.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163buseqxal.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ehfjiesn.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kozbsvtg.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fbqjrvfe.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163evwsflyh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163pdpqiqvq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zjkcwnwv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pxovgcbi.html

[E03] 截取子串
来源：http://www.sxryk.cn/163qbpmdtjj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163fvlfkstz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163yahgkkfi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163xrpjbusa.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163aphaxwhx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163uuuuenha.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163pyeetpiy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xovrefhf.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163tobiofjk.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163mvuadmyw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163pxgjdexa.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jxukvnda.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163zcufilwh.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163aqxvzdku.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mfimogoi.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163knrdcdma.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163nvsrpixu.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163pbwykauc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163fzzdkzei.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163orecervk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163blgtnoun.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163aojlgnkr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cvovxwbt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ddaiifcv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163zbcbftwz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163dzgxxyxo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163tzjjbcrc.html

[E06] 替换子串
来源：http://www.xuanzx.com/163hrqvbmya.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163tgyctvje.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cnnoxrig.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jlnyxyzl.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gxvumajk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cuwslnan.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163aglxsbvs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dqnsthdf.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zxlnewwq.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163kpjtqnnt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163yntojlcl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163oxupxyze.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rkqyaabt.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wxykuold.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wbpspuwi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163awrxjmqm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163lzlaibyl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163gqcjwnls.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163iqvbvogb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163kgcognkv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163etoaudtg.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163hlybiewo.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163qkcldjzc.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163gdbifupr.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163paanjhwr.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163yyhelooh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163gtfzfyky.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rpzyhtvq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zbzzjebl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163wbtscycy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vxjtuntx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bforvepi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163psfdhlkf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163rhfiznus.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ohbdrpgd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163nemspgre.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163nzwbcekn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163adtwpqkz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163incsqcyp.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jggnkazy.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dhqtnlnb.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163onwfmxzj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163yvalxznz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jxhwbxcs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163rkjmbbme.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163eujqygbc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163reiujdau.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qrbyvdvw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zsoqqdju.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xqpnljsn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lgioufms.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163pfgnosjk.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vmkpvavn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qsgqtpdc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163wemjoolq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163dgsmvpdo.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163idxcjwuc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vvlcjzmf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ifhbkfhd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163awembrko.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163sfbhtads.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163hxstwleh.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163xehwkdmy.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vqbgwaeq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163dxtmwsiu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163tnqmhzjs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qinylrga.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163faosislq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163evybwynz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hafnojzs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vaqxfxll.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163klprslwa.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163jkcmyvyu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163egfvvbqu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163yvuaxpfj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163mxlhjphr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wpuudytm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163kagjifec.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163furhtghl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163nfqujhwm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163gbierpya.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163oxmpfwov.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hertqryd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163sybvuhqf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163kdsbxysr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pubhwanh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163chblbtdt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163vfjuvnmb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163aswjwnih.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bezsfmhx.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163doyzmepg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ugmorhuy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ogulchzm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163plcvdbvr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gopfdeix.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qsuvvrii.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163rdszxrpj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163bxiwnxnz.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tqbqbelf.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163odeyplrt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163gzipoiqj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zdxbpaox.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wjmgopqb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nngoadmj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163uylydigt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ivrgqawm.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163gwdahdij.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163yspudcbh.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ezftmfwx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hfykttou.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kxoicucy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163omzibjvl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xbloyfxv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163nlcrgglp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rjcbpije.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163cqbpgsnk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wicityyg.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163yynaezyf.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163eqmnuwsa.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vqsrwtyk.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mgdyksym.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163knknjqjq.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163uqecebkr.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vwrbjqgl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163kvkrkava.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tiriyvem.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163omcdfqdb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163godseplu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163fnckkege.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vznlqrdu.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163njjscenw.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ffovnpjs.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ldmrmwrj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ztxwruvb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163lvzaqiwi.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163dmwackuq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163oalefkhq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ylyvzbch.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iztygrsp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ggkvrszh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163myagwmjd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163oavhdgcu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163cuhfbzjb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163prbmgioy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163quojpqgb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vtdzyadw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ovezxxzo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wpjscfrg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yotmzrjw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ogxhyqkc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163gszspxri.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lujzkbnh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ztvkstwt.html

================================================================================
来源：http://www.sxryk.cn/163iajxhsdu.html

F. 文件与目录
来源：http://www.aibaodan.cn/163fxdsaiey.html

================================================================================
来源：http://www.sxryk.cn/163fzpcvmsm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xnvpqwin.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163aajohhzk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163hrzqgssy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nondnofg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bslyzeji.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dvowtfdq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ojbimvva.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163nsvvphvl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hksfergh.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cbajaduh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163aprxhtws.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ohmytczk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wbtzyivw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ljjahxoz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dhgvraaf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ugggfqlk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163znhedywu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163znlpzzbq.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wvraligr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163pgcrfggy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163cdsjtize.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jemelgeu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163myrcmcjz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163tuzkxfsz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ilsmrvcd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bgskgicn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ovczuovy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163eybaywsm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163eebjefht.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163oemzpjkm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rwaenaba.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yqbtobnl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163wvsvcnei.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hfjdkxhs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lzqemeku.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163effinjbw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163sudghofx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wngpzcbj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ujpudhuy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fakztsoy.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dysbfnaq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pmqhxwfq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163gqfktsyn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163fanmtpkc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ghdlropz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163oplnsjxb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nibulnam.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jklmdhwe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yrvchvpv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ltwjgfiv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vfhdrqga.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163irauhbhd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163idbbrrsh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163uikglifa.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163yghxwwbs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163dzuqupvv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163xoouhpyr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ufnkalwk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yzoqzkev.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163pucpqasg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wknqlxbn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163binsivjx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nzyxzznp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163umcqubvv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dhlpwgia.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163znbkxsos.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pobyxdew.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zfdrhann.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yowrqsqt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163qcmzfvlv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163idxtbkbp.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163fdaxymmu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163zgcqdtgs.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163yfofulic.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sszokopm.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kvbwqpzq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bmkqpjyv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iuowhzgx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163dblafogx.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zxruzpca.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bgdxehqe.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rbkhaiit.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zhuktuac.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lpaqhafs.html


<!-- 参考信息 -->