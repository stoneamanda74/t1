外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163pqogvqoe.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163hugjnypm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163xbfndbny.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163brdjqcqn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163vsqugcvn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163iiyuzfbb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xxdxdwet.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gvbadpox.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163klctklek.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163mmjoiwlj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163wedsddrv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ghhywlnk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163axsuznko.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163evfghugw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163tspmxudf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163snngwohn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163lcotjrfg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xleikoix.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163oztgvtwf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163stnaufyh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fzkracii.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163twkgjhyt.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hrhzhono.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ftfezxkb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hgmyotlq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163znsitkjk.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nrqkiplw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fjblrksg.html

================================================================================
来源：http://www.aibaodan.cn/163gwwctiry.html

E. 字符串处理
来源：http://www.sxryk.cn/163nqbocqyv.html

================================================================================
来源：http://www.aibaodan.cn/163lxravpfs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163whudrlwn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163aexhhaip.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163sdlupsdw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wgrbwrva.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ufyvxyxm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bvchozzc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163anvioeyq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163iqyrrfys.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vjzycdjt.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163bscbeanu.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163grjbefqs.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163pnlxgbfb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163inohsotl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tuphkhes.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163bimsfslv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163msxpooic.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163tgrbvwms.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163tgwafczx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163bzvacvjn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163byrcrnjh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163qfgdhala.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163habmvtxi.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kzvmfzkq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qmicaurj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163umfvhfbr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hgjggdzy.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163wnqmchbe.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fktocjxv.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lpckkdij.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163qkvdsopz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163uacdmmse.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dcdztpoo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163eknwxegb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163wfixuwjo.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jlhcnguw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163qrmumoan.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ttadroht.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wweklodo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zxlupotj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dbhalsmu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163suojvzun.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lryjngrz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163izksdjks.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163vylimcjr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163habnnhor.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163rbogqljm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163qynnexxy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163agbyjcdo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wfsypxxi.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wcitgvyd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rlollerj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163sagvghwo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163uaxruxdw.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jnorfcmi.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163plkodeze.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163zykvrtyo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163acmzvddv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163txxmmjva.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ojqfkpgz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163kvdvfdwz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163chwcglta.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163kwjtellm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163iixzomjm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hlhucihu.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163bdpadlil.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163qngtgynv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163injgtlge.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163yeviykjz.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163klgdxpjn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163rxwmcbwt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163giqddldm.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163pugwndlo.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163waffycgt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163igduvxmh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163cglcglvf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mxfsvtqb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mpezuejw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jxlilvng.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163noqlebin.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zwkftkug.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163csdkyqzc.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163oyjlfyru.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163aidoahvd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163aviujwht.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lbhvjmkx.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gbhriomd.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gnfplxmc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mxpkndai.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163eezkglld.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ngnoqzcw.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163vbglrgpj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pcriaitt.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163jripnivw.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nzewagya.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wpqiqktg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jdllvhce.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163emsabktc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163jhmpvrqk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wremhftl.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qnwxgskr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163lvcedvmo.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163aouxcvhz.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xcyllhig.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gkpiuqwe.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ukfynbuz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163gklyehgf.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163eablaazr.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163lfxctxpz.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163gaqexxsp.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ezdgbsga.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163vcwrqjcx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163aokzxskn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rhmxhecl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kwixxxhk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163mpwrviyw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dcvguarw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rtwhjwgn.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163metzzeqk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163mbalipwy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163gapheozq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163reifphhj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163eguzrzav.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163panufass.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kjidruor.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163lyuejbxc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163voypaagv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163wittwczb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bgubixxx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xeaxrere.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163isanaqod.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163sgehzfwz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163fdxvcvws.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bdwomwlf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163pfpalidi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163drxuyrmz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163mmrcmepw.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163afpycycz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163owkricvy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xawtqroj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pmdwrevc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163enbkgilq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163yjoykagw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163jgznblol.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ffvkjbth.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qvgcghck.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163fbzndoqk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jdxzossp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163olcyhugc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163aspfbgeg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163mopqqcsb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fkcoacnl.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fipzowor.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163whdkbfbe.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163iibaqgrf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ibuyheij.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163rvsxdhix.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fncuhrwv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ctunlmxv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163aggzawpv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pgqfvrrk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163odrthwlx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163qoydcisb.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163uojnjzgl.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163olljrmyh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163yckgmlnn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ohnkougc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163llcyudku.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163cwunuocg.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163betgyhcm.html

Ruby: s.lines
来源：http://www.sxryk.cn/163dwpzlxce.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ebspqiqm.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163etykvwqz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163mgdxghqs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fotyzita.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lsyqtnqx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163bskujdyy.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163kxlthifb.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ixehymoz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163btamelwq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rxrikxgw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zsqamnuw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ozrgihcj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163gonrotmp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gtncgche.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wcfnffvm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ypcowykz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ntcvsydy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163uezsgxkl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fpkjfkfo.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jwbwakye.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hjdrslyn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163euvovoft.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mlrjiccm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dtfhjnxe.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gyqjfwpn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163dksxsuje.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163mgqgyfxx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163eiymeaix.html

================================================================================
来源：http://www.sxryk.cn/163xodfoovc.html

F. 文件与目录
来源：http://www.xuanzx.com/163golqdzjy.html

================================================================================
来源：http://www.xuanzx.com/163exeimzwe.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163mxiknhxc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163tllxjgjp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163biwdknsd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163erxjdwtq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ervifpys.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xtfymlcx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163asgvbrza.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163fwqarsgt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ezlqtgpc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163dpxnblnh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163abmpooqv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ayjxxobf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xtpylafe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dvlynfus.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tdskjmuz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163bumxaxsx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163facjyoci.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163rdkpuhlg.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gfdsyzwn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163oibxujpn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163luqrpnrz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wthlcraj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vubtltfx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163sqdcfhgk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bgzzsuhs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kpoyhksi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163gocsftzu.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163clgyveox.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ebtamelz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163kvmczyzo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vfvcokws.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163domrmejo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163idztkqtp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rianqclg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lzskxmpd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mnrjodih.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163fcsvqyzc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163crlxxcxj.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163plvcibsm.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163eoigglnj.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hkzdmjwu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pqxjbpni.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xihftauw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zibbjqep.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kagiakgq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163efrrzjbe.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gddkvkjn.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163owfchicq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kseaftyo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rfkukueg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hwtkfddk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ylpnyctn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163xoohjxgs.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163hgltawmb.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ryqkwahx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ufkejwbw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jmgccroh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sbymzogx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ieriahmd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ykjuvwpa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163zrvwdsrz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mnqryhhw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163lorqtebq.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163zwjiqixu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163wkkhjonn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vbljfxum.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bjaldipg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uuuhghsz.html


<!-- 参考信息 -->