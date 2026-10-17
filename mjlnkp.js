外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163brcluevl.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dtxgtmom.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163emcrnlxc.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163dybstnmp.html

================================================================================
来源：http://www.aibaodan.cn/163kurafvoh.html

E. 字符串处理
来源：http://www.xuanzx.com/163xwlovach.html

================================================================================
来源：http://www.aibaodan.cn/163yfefsxrl.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jpeknner.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163zcmiisaz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163eorpsnzm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163knegbbth.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rmyfhxly.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163tooawmcm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163xnfcuxzj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163raknxtvb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163fxqwagyz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qtlvxkse.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163hbxrafyq.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163oxgaasdp.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163emlzshlj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ubugcoks.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163clqwqbhz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163veveqhnq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ozgnmnak.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163aihwlfzz.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wwdnbzjm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rotkfkgo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163bossxhzw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hymerplg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ynbifbcl.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163txdpkubu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kkslovyf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tzmycvex.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163myspecgk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kkdivguz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163wjwuvgec.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kvtptvqe.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163znnxlubr.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163swfibrfo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qrccwgih.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163lzwievvs.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163utbczfwf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163forrcocj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hnagbwyz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qvswixit.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163oljudlpn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lokgquzl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163kbsdhslh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zwhgdhsj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163uxpkdwij.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163efbxtjnl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163tcwlkrti.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163uliocuwc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163lzfyxcld.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ludglwtz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jqemcaxm.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jbuzhhdo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pdnikmfl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bcxjgyri.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zlyijpfp.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jnvewpje.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bvmpjxjy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ycmxitdc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xiaflloa.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163oeeivfng.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163bonbpfsn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163szojowdx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163utqgqmmz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163unerimpw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163aancvqqx.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163fhepmsxy.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mvtjanrm.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bupbxdxu.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163kswotbih.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163nkytetbg.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163agmveyra.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163nydeprwe.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163oleopptx.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jiumducb.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163zapgvgec.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jjdzffjr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163bvgzvggk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bfszhich.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163cxesfgav.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163tbrmnjns.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ktpefigo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kmitupar.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163rpuozcmp.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163wiilnxnf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163vozrkxui.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163hmeaalwn.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jqjmrkpi.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163irwgxysb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163yhhxakae.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163kukywlsv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163bbcxazvs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163qqdqacfa.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jrphyngb.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wikdhjiw.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163zumxvsdz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163iodpsals.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ebleuznd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ccthpfae.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163jeavdawu.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163elsehtcr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nqgprgtg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163oipjovne.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vzztlybd.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163khhvaetn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fcygfegr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ayvzqtfj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163iyxipljr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163towldljh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163urqdcpzt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163gxaypujo.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163dfdoubjb.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nwqkscom.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163zzobtdwy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rryddggr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fxncowbf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163lrktdivz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163lqxftywy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163avvrfhdm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163tubvoxxq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163sbwrgvab.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163vvsistex.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163yvlqfjlf.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163eetuzfpj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163vnjadgbu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163peecrxyt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kxdwgnny.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163dfkooobd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163gvkyaspz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163cqpntwzl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dtyuauly.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163nfcptcop.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rjugpgxl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vwnyixuc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zvjwopnx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fxufoilx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gvfzmiuj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wywxaxzd.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163zjffqhor.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163thucwnaj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ijevoute.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nuuamwlu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ogqncsij.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xkkagfcw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jsruxuoe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163pliycxsm.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163zfxxslck.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163bjqbvclm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ehckdksh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ssdrutsd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hphyzaom.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163olwbjxpl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163daqwjmqq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163drynoucd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163gpzbwghz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wvgfnjfq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163yumfhzgm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163wxdpiclb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jabkoopq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xnvdpilp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lslmewfx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163owdkdzvd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ffzeqgfn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163wuprrfxm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lwfbnyri.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163jxvpilyu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ojcvewck.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163olwwnkpu.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kebpfxdq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lwyltdcy.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163jmjaybyi.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163nmhxluuu.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lvrlmkzn.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ytosxgzj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vzykigld.html

Py:   if not s:
来源：http://www.sxryk.cn/163zunfsrdl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163suxawzpq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163qapfxwqe.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163bwrpuamr.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163vuyedaib.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lkvxzdnb.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dwrmuczt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163yxtawmfe.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163joysolkx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xgttekxm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163febcwrct.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163szusgzao.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sampuemw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wwsdvxlo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163kxcywxdf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163hmnqxfdf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kvyegjwj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xhyfwdho.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ztkhmhlz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tvloefrg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wozmnagb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ujuymnmb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163alebqmtt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ndogxcgd.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163mcotsorh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163geizdpfm.html

================================================================================
来源：http://www.xuanzx.com/163kuuiqmsi.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lqrpwjqp.html

================================================================================
来源：http://www.sxryk.cn/163mwoqrwfi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wvdmmrcw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163nngkzdle.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hwpdoxfe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mlkweoeb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dnvqlkmg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bkmxkefb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fxbhmuuy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fcmmzfim.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zoeyudtd.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ljwnrlwp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163djxgesgy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lllgzmhz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dxoonzwf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ivtxulfe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xjlpslrl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163amffyqzy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lrgzrfhp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163swpgoqtn.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gcvfakpa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xscimbcf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vjlxetyn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xcrssafh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mfiwomzy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qvvsggvu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163aihrhwuo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ockvfies.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163lpdexlwb.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ymfnvlwe.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163hairtxsk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zbvxauax.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nwtuuwvn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zyfdpbqs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xflxpppq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163aayybzbq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163leffhiuj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163eextvpqb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163pryoqokw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163nvmftdsx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163vnalqtrz.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163kfuthjkc.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sekijknj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163luatertk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163lbipyrwn.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163rmvrmjyc.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ltlfbiri.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fsrvmyom.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bfssjrdg.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163arbmatix.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wfmyvosk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xgrvipof.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lnijrvyb.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163nbvfrlgz.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jmnwcjxq.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ckcfmpfr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163mcwdedwi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163kbufpcgw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ppjdamhv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163krxzdfsq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163eoitufis.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qvtyuvzd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163wjlolmnl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163yautfyfv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163oicjvfaq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163gffvjrdf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163cxaqqgsp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163totutqdr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xtnubrxm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nqthdwmf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ojarrlkm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dxolyioh.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163mzkczhlf.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wqkryujl.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163sqagsnyk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163achausfp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163dxzpmiys.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jpdxkwmt.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163simbwaxd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dodlclcy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mbupitaj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kkxkcihe.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tuddayqe.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rjbqrgrg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cdzjrdob.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vzwdpxql.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yekoheyv.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163aztapfgf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163lfshpkio.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qnzjhczp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163huxmaxye.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163egvyanul.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163dgscpalt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163igncjmre.html


<!-- 参考信息 -->