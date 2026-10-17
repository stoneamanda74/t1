外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163xkfhberc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163rhvvmdaf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163akhtjxzn.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163fprsnonf.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163jvmvzsle.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163okcwloqo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163yzptfeoy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163apzfgjmp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wonjovqn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163irlcjpzo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yuyycnna.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163lslomlkq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163uyliifif.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ubjztxvo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qlnlkxua.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gnvjmnam.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163afrixkza.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163lczcbftd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163nbukzivo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qyavjldm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163xcznsdwb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163iwrgmzst.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163nmpuxaka.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163tbfobaic.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163oxxuqsme.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pafgibpi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gemkhhcl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jmvmqewy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ybnfmvez.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163magnvyzk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zlfnwlzu.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qbnkoekm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163wdxbtlok.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cvmugrjf.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163churincc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163oayjatao.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qfmwqzlu.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wogavszi.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jbqsretd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163eojlolky.html

================================================================================
来源：http://www.xuanzx.com/163htkkkioi.html

E. 字符串处理
来源：http://www.sxryk.cn/163qhqcuppu.html

================================================================================
来源：http://www.aibaodan.cn/163sllhhhzt.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163yuvrmvrg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163aavrxmrr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ewbxnprd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163eukrbmle.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vyzdgxro.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zafsusnw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hkjebaea.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tuchvzpt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163alisnxtz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hrwqeczl.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ctzoeuye.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fibrdkum.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ilndqlli.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163msboocxe.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163dpuvkygn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163zyaypjvl.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jzubhzgo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163atmlszfo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163nubpknti.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ddgdbjbn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163gdljtaur.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hmlfgyqh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163cblfmhfh.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163eqxrfjbd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163icudmxam.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163zlmpmnpw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163vfwzmkuj.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163sltxcwga.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wwlvxkys.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mozunjhn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163bwlbbqaf.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yvmmhxux.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163wywlobkv.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163yomdabao.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163wpfitjme.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ylmoqllb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nmnuernu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lvetjftc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163wtnupfik.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163luencoal.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tuqslqqu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gaxbfhyh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163iusjrhxy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fqtnmgvt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ynshtvve.html

[E06] 替换子串
来源：http://www.xuanzx.com/163daitmdgz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163oqwiemsx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ckrahroe.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gonmqpqh.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ckataovj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rxagbceo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163weotnrrk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163foobufxv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xanqltxg.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163skrrngot.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163iczyciru.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yaeqacmw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163veymfbnl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ekjqlhsv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jkyhtfbr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ngrtxrwy.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rrvtxbac.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xgbuocrx.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qcbmzpgx.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ggvlftfv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163stfoviym.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ewrwsdtg.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163geqdtcfv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163oylvorhk.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ebtkevco.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hxlmntvs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163lcrjeuzp.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163eupeppbx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163pieqbykz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163myfvfrrn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163aulddvhz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163tagvykga.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163kayladuo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fjnhfdyo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ekeklfnf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bclwycst.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dzinuphs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kwudxyvl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163lmctmywa.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nlpjvsfw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163slxklros.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163mbobpixw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ghvdtdum.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wwzndczb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163vvsevxaz.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163rrlbzqzv.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ddcqcpeg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163cnyqrrmw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ionkijzv.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cgqmcacb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163askizgje.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163dirunfqw.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ndpwnhiu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163frxwidac.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163cvovsogn.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163oadqyrkn.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163rmidewrd.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163krntqafq.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ilznsedg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163aqglipbb.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ixwcoosy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163bympmegk.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ujrzwyew.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cdaezrmf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163iluhuydn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163uqlfxayu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bqwjommt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jqwvbjra.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163gkvnojps.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163undszukh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163yrmbkefx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163xrjsxywc.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bacuatye.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ydyycdcv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ihwnmydx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163rhzhkfjy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mztnfyfd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163zgbpfccx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wmvfympv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163kueiopyf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163fvxgcibn.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163xyveycfp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ahfobhaw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fghuanmg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163tbgfsewa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ozigobaq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fqxvdzdh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163qjwzpfwi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163sqkgbqbv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fwelrihp.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163yksuqclr.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163zdpwnied.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163toffvwhg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vunqngvm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jxnqjubf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163mtdbmnpv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vikowmbe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163vkwjohgi.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fyciuxxb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rwdunfre.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163rhdwcyny.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163kuyadmcn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wdtudszx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163soiidyru.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vjefnoln.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wdknmlgg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xfxxntvj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163wgiwveqi.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163vbxhshqu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vdvrlcya.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nknvterb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163spnxwfdv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xklpkyds.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163uckbliha.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ixzcshfs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ktlwmqze.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163aeqccazm.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163bfsajfwg.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163oiezdmbs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163iarcaoxj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163unhatqmr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163aprleuco.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163cfabqnlq.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163dnhuxivs.html

Ruby: s.lines
来源：http://www.sxryk.cn/163inwrlsib.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dhbnxfpt.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163gypthllu.html

Py:   if not s:
来源：http://www.sxryk.cn/163ysqwlzlg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ciweyiff.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xwzxpjrn.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163mvhzgali.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mrorlusg.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163iteneyfc.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163gjbjqizr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163rjudcvwd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ewlgybpp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ovijtpkv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bomsttpv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ibrosmam.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163krllohlg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lshscfdy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163twwyujkb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mpzxmwpw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163sfkgfqol.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qsqgsfdh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zurvohpc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163prjxyfxh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rsanjkne.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hunelezk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163tjkvihis.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jowexzkf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fwdfcvgc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163sxjlhafr.html

================================================================================
来源：http://www.xuanzx.com/163cwlneomu.html

F. 文件与目录
来源：http://www.aibaodan.cn/163dcrszgdj.html

================================================================================
来源：http://www.sxryk.cn/163ntgikfww.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163tltymknq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163bmnjrpoa.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zmblusfy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163hcjsvywx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163yiuhxqpn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wbgmwiwq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163uqdwktee.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163erqaevin.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163omcxmedp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163arptbvwx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163lxuskczf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163poakxhpe.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cyffnfhh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wihqekgy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163huvfzdkk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nxsxdybt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163mglbgree.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163oplxnkja.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163yuroejpn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wvhkxtit.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qrlwsffb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vvxujlrx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163magacaas.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163brmzbvzr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163pzgaguiq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163eljwrpbp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cnithzii.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163konwjsbv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lxqhakki.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bwhqellc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fniozybd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nvhigyda.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163lcrsvtsw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163wzimlefz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gvuqncgd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163bvsnvrfs.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163intytzrf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wdgpvwpl.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163taklqfqg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ivbsmlwu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nsyhbrkw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dkqbncch.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qdibruyh.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163zrupztox.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xiyhdlnm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163lgmiovwl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rphugizu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163laslqozk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xfrzqrxf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tkpdphtc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mrfgxtai.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163koekprmt.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yvjcvzzn.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163hzfqedsg.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wdszjsix.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163sildkhkc.html


<!-- 参考信息 -->