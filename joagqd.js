外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163tvzzsyzn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mceoqozm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zxncfhur.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bsycgatj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vargedqj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wxqqbijo.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163bclrnvje.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jxphmlos.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jncfbqrd.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163nhgmubnc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jqpqjfww.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163eolzmlwi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163cebvghdz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163sblqnacl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pposgxmt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uxrgkaph.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163pqsokebt.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163yicnyzqb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163gmtaotpo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163spjuogkc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vhjmbelr.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163rusiqygp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163zrcboocr.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163nptqytnh.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163lkntotzr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ymjtqbam.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163vwzkoljz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ysmukosd.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wfrpbxvl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163cyknjugr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163wgqcsonk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qthledul.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163aseiucbt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163grqdludm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lifygsoe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163epiboccw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ewbubjqv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163meyapzxb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163vpguxvov.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163nhnilckd.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gfxijfib.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163mchxvzdu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wmhkfarm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lnvbadmy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xjowwiad.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163islyrsjl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163gvcngtkv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163bjwkqssv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qihzbqkh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163excmbjwa.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163aijkyvsm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163xltqzmnj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163oqjblhrw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ygpfrqch.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163yolgksjt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ccfzpaan.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ljhjzuxt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xllfxmil.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163jntatfse.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163sykpunke.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wbdkbwqi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163oebmduih.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kyjhgxzi.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163cigoisui.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163kiqguhgp.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163yvnvygew.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rwdodbhe.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xxicatkg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vsqfhzye.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ohmouxdy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163chpybmpb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ukwknncs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163hyytitxf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163gmjrdxxv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163kqdjpoev.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wrvuouic.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163skckqtyu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jakiiihs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163nrxbgfcp.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163oyeikxag.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163seclxqsi.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163lrfuoovv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163sdvomdjt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wadeoyfb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dbnnazxt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vsksckdh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163hhyxwosc.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163nkzehcbn.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163osamslir.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lshrraef.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163chdbyyli.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hrmdipnu.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163wjucexyn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qurkfzad.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zwtvdort.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hiapumhw.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163aihvstml.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ccapqbix.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vvkvjxuo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163yeinagag.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ilfgbkst.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gkrnjcsr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163oxqjjwpb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vijtiqws.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nukpsitl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zdqdsilc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yjunxtsv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hegmcerd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163bkowuruy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163mqcyaxoi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163fbylewww.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163nidzagtu.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163gpvzulxv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163idganhgu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163uqgemqxt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163essrajem.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163gnwkroto.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163wlqdrypo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hdgaxolz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163iotbejat.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zvqtcxqv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ilqmqxcy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163evjmqvri.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163bggrojif.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163blzlvmfz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ynutmdrb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jsgznujl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zyjwdpgw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ogvtehgh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fogadmho.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163usaljffl.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rhcvycza.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vrbzuahp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gaezkfap.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qqzctpmm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163dcswxznx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kdsgvjnl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163uvdgnnob.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163czpocwyc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163eevhvlzw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163bdosdxjb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163vlkojlan.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qoxkbggq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yfqixhjk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163cqucdzsy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163rwluiuau.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163akhtzzld.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163hvvazfso.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163uhbtutkq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163tcpnwxnr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163iepogosi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zgppesme.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vocmqumu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163kvqifgma.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dztmrmxq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163acntztqg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cqrrfygy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163btvmgjle.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163mpdboqis.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163mywbtgid.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jftwvzuk.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cjknampu.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163eynhgsqq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ltujkhtk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xqzlddpf.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163aprwvwbo.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163uxvohkyj.html

Py:   if not s:
来源：http://www.xuanzx.com/163tamklifs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ziogksmr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163zcfzynur.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ccdvgzwb.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163demhobax.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163mdbifmwl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163tmybnxcr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fydnfoxh.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ruoslsft.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fxexkvjq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163bgtdglxl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mfikomfj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tdqdjhxb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vxjvtauz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ifbyaybk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163zzfxnzdo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xsggypjy.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hekzqhwt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163hwppbmds.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mszttuhp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kbochtjh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bkuneijc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163suqcinrv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163eczfywup.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163kxfocrmn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163cfdrnzfe.html

================================================================================
来源：http://www.aibaodan.cn/163kjehbbuo.html

F. 文件与目录
来源：http://www.aibaodan.cn/163hrodlpkt.html

================================================================================
来源：http://www.aibaodan.cn/163qialkxmq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ikwagznx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163lapzsymc.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163fazpgiln.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163szfznqgf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163etftcubd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vjcwelen.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163kwlkgjfc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kydygkka.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163rygfxixc.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wgvbzbea.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rhlsdshc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163stjygosd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ddqygjhm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gslzohmc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163sslpmuvk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163bgvhxtdn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hctrhzxj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163oifohlsh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zxrfshhv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163czvsytve.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ztovuxpm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bglvkqqb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163idnqslud.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163gigwanrh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ccwlpunb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163wczxkpbr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163mpzmflxy.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163oafpbkqn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163cyenaqcw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163lrnkdsez.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163piucamqi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hudlhnpm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163oiqnxqdg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163kfsahtmy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lncenztw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163fbjombse.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jricbxoc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163vvpdsvrq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gjhtjtht.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gysvrpsl.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sonzplhj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ajedelfi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qalteiiw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163yljpiqfx.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ujpduxvc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163rlctdmtz.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163djogjabj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163djkqrext.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hazeirfc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yzrljdig.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qqvnrsai.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163dczxvsqr.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163gynbuesh.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163lizvulok.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163rvtmkydv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rhogtbbq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163lyxintyh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163prugjugu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qvvceban.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163tgdpwfub.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163lsfqzoih.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ztuvkgky.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163pziojoon.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163phbwmcei.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163zqxeedee.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163trlumrke.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ixdociqk.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163upzrxamv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ryhxnolg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163pmkpczbf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163axxcugwx.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ejrtefjc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gishpvnq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163divfjuta.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163olxvbaxk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uzvihkpi.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cooxyoat.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mvmurosn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163gjprvvvq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163velvxkqg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163qhonkzjr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kpvxtczu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vthlbnxw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lziircvr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bzieuots.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163cuckxedp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163cifkxedb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xobhhlrd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163anzfpgvz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nleisuyd.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163yrgjcvpa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hhlripfa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163uvndctuk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gmlghlum.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nepthlts.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zlisdaen.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163pebilqeb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sdgubxxf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vemshncm.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tylvknvy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163mfqkbllm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163fufwqxln.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dkqeudbz.html

TS:   // 同上
来源：http://www.xuanzx.com/163ublfcvtd.html


<!-- 参考信息 -->