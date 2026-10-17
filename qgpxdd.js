外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163pngzkceq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rcqtltiw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163wupxbiuy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kjqikvvv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163eeqfhied.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163iqxeijxt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nurdbgbu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rnlbniis.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zoovnqdj.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ygzwvhjg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cqvruqew.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163dhkubgfm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163zwehtocb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wzoccldd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rttleziq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163zoltzvsn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163upsjojyb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vlkdnkte.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163pvuxppqi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163zjctvktj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vielzsye.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163boeudqxx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zcpoxjat.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163eqrthdyu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163exjujsli.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163yedmrudo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163crxrqewi.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163mjavvnta.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163xywndfpc.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163msdfesgj.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163iuhnsrql.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163buqepxgu.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163sqnpbwdx.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zgbyzmlp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xrmwjoac.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163azrmsgzh.html

================================================================================
来源：http://www.aibaodan.cn/163qmzdlaky.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rvxnjvob.html

================================================================================
来源：http://www.aibaodan.cn/163yxjkryrm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kzxtmhrq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vpgrywfk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vufdrxhn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ggxcrjjf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163iypobmyy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cdfmxhci.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163jzbrmhfj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163iqehudrs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163hqirttxd.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163exngfepa.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vdyqnuzl.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163alumsauc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ptdvnljp.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fxnaijzj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163stjuuqxs.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163pplvtlgf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163mlcmvzls.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163deeoagjl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163eitveygi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ajahcgwd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ovnyskpf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kbicngyq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163cmjogyiq.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163wztixhho.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163octucfog.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nljfoevi.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gzadwdgv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jsjbludt.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163rtliswus.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xpyuxpuv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163vepoioaa.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163jvfmfopv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163htjasedb.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163trnrfmco.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qfgjituz.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163mdyedurw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163novbxvpg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163epkjsptl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163vlgxfqyo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eiiulijj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163bzulatxz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xelnbcrk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mlqcazqa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163hpnvvjow.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163deyffatm.html

[E06] 替换子串
来源：http://www.sxryk.cn/163vlwofmka.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ugtblejx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163yqjpnojh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wbepfdqd.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dzvysnjk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cbcpcdpf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bgjcohso.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163tsszclkf.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163hknzlpil.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163snlvkgak.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tukqhzpi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cwbtaurr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163iautxtod.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ekapmcnv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163qslaryhi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163bvwwoumh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163etdclkim.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163aucgjwhw.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163nzqqbhdf.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163powcyykl.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ysdlcrvi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163rucmpqaq.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163xfaoreqr.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ckhnotei.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163inhmavew.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163miqvyyck.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163umuywdml.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163kbazywec.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163atzxjknv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vkjklokw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tkemifly.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lcopvhhd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rkkfrdot.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cgvekden.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163tcgungcg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xxzazohe.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163stwyxqnp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163iefwlrnv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qfqjzlmi.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mluxtblm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vtuhrvop.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163mlzmrqwo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ryzhhqlw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163jwrfkncn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163kaeaqjva.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fyffbvyx.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dlpdpjmr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163kbhgwrjm.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mzydvwil.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163apugkuel.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qplgxtgy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163cqjjgado.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163wnaqbecj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vasryfxk.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163odkrbevr.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163yogovyew.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ersysbdw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jixviufr.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zwbcnyti.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163cfmaewha.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163pnpopqsr.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163umqiinly.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163dqfvzdth.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163yjyjnbge.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163crlahhwc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163cwixbdjz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ohnnfywy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uunmrcdy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163wqjlsmvz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hztkgqvn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163rxwqlpex.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rdsgzrck.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163qpdoqiai.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wncrivia.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rphyxczs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163tabderok.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163gmwbdvhd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163sordloik.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tfibwcnv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163pvzqemua.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gdldlthv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163wwnypxws.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ouiyatti.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163kuosdvfc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163szjnnbfe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163dvqgwepr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163fiygriej.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ttxxinhr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163boqejrwp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rqgdirgi.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163loawhuiw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163fuldnxtq.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163avmcdwxl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163oomrafib.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tywxoxwx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163meknznuz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163sfdgoxla.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163pnvglhzs.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dcmonjhg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ngdgrupz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163fhfidhxx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mxmosgju.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163heyabwjb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rhhwgimc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163jlwdnkvm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163yzkhwhir.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163roqrdbtn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wxknkclo.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163mqqjeftl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ldrszbhg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163kswplotw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163poglpeqa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163iljdexwf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163agjqavnk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163lotrczxb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163tpefquki.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163rnzeehjj.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163swwpmhma.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163naxxhotd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163hjggzjmi.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163oxxnhkbh.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zopbdwaz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163mxfyizgv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163otejkqhf.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ohknftpa.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mzefykvw.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163uqymbcnu.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ihzdthav.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tyiggocg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163rarczmah.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163hnieqxmh.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lgrtjoyl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qckfvhih.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163lsfhxodu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xqteqooy.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163vqzeyunc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163nlvudlny.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163nbsvbuka.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bsqrxisk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163miupootp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tnstbmay.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163sjugfhkp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ezrpkyzm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163bfvpioua.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163akawdlei.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fbjhlcep.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ugdyczsm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hsxghayw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fpwyeqpr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163aqpbeazk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163yxivpyei.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163bnxeopqt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jzmqagel.html

================================================================================
来源：http://www.sxryk.cn/163rttlrboc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163mgpyebrm.html

================================================================================
来源：http://www.aibaodan.cn/163uzvpxrxi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163apszgeze.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yqcfpvwa.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163hfrkromx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163riqemxbz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163asknkzyg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163avaykuwi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ziypdutp.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163rxlgaghj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163pjmculsv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163nrqdeift.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163oiwvofal.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163bcfaorqi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163whalznwu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gpouztdi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uygrwehd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163sirjwzdx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163lxpmsook.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ggxltuti.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wtrxwbll.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vxajpdkc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qlwogiql.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lxsgzcac.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vxrpbeqo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163bpufgmvx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163rdmglrfl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xyiwrzbo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163mncoknrh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xxeullqv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163omqaygkm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bixezjir.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nynmydxt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oskgykbl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163detriihc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163nuimfdkb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ncfuqtgk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vzdqwihl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rvwedvwf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163jmgxpuwu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163eohoxzmw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163igxkigmk.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pjxffbfp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nirigibu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163guhxeyie.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163oyuvomnd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163drnzwhcd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163grebbnjj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qvyymqlf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ebwccdce.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dsnkdzyd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dnhblchv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wvdujpjq.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163mwuyrfrd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163wiscfpkr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163zltsibhz.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zmhigils.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163frwteipt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163nndefqjm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jkrngvtr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kapesbpm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jsgvmord.html


<!-- 参考信息 -->