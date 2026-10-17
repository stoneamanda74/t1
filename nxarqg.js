外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163njzlmxfw.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lxlbbhey.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163wfpkivps.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163zyualvxl.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163aauhmlrz.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ngtsuweg.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163dvhpkwmp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163keyhufih.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163lovckzwg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163ucbuoaqs.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163nizqoqiy.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163cygxxhbx.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163gebwtlli.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163xvhqqkge.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163krkegrcs.html

[A17] 位运算
来源：http://www.aibaodan.cn/163kebsiphq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ayzwpzni.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163ytnevvoq.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zzndwpqx.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163rdmcqqok.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xiijqrbl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163shpllwjf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163spvtlwgl.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nggfrjxa.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ygkhqvux.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163tmvyogbq.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163cfhzbmsk.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163efdfboik.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ecwxbbvy.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ipystfbz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163danjstpi.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163pptstwjy.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163jpbpvnfk.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163vceceaqo.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163rzxvmozc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163qytinbwr.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ahqwizin.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ifohokms.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163tzhyxahe.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163qjtvpjrw.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163psctpogs.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163yvkgjjcg.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163pdpvmdul.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163lokhfuta.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163rxneigse.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163povtpttl.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163opvxepxq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ivnefrpo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163zufpebhz.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163decmdful.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163pkqoywwv.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163kwvtnhob.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hjlgvkgt.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nxinuarq.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163yaehbpps.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163svwdvbjh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163frlfbtrl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ycnwawvs.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fkmoifnv.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163eqsnbpca.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163bmlxnlhe.html

Py:   len(s)
来源：http://www.xuanzx.com/163rpzcdajc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163tfryvdcc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163opcbnipy.html

TS:   s.length
来源：http://www.sxryk.cn/163vkqjkwyu.html

Java: s.length()
来源：http://www.aibaodan.cn/163itykcaoi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163vnifechn.html

Ruby: s.length
来源：http://www.sxryk.cn/163qmlffcws.html

C#:   s.Length
来源：http://www.sxryk.cn/163ijxgmykz.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ghpithut.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163pmzucmrw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163jvjwjscr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163sjuqorpo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163aducrswc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mkczjrip.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163rybjkfyc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163cxnlwmhu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163yycqghch.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163oinahmaq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163qeqrmect.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163lrcbyvrx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163kyvwnyky.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tvtmwhqk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163adxagkni.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163dighmgmj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163wsvzqvpw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163hheoghsg.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163fwivilxr.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163inkojqkk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vsdsjfrt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gmvjpjdh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163pjblimhy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163bfsvnzwa.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ycafflub.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163hdhsymoa.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163nhjgqdwj.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qtijarmk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ldkjlrxm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ywgkkvrm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163wnsmhjqw.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163tblzwuor.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163chriniau.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163shvlartv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163wwbvjbsi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163kbigbies.html

================================================================================
来源：http://www.aibaodan.cn/163kamnyuvz.html

B. 流程控制
来源：http://www.sxryk.cn/163svfpgwfv.html

================================================================================
来源：http://www.xuanzx.com/163bswnenxu.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163hkxnawea.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163lijmopuu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163obxtteds.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qwmqntvu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nnwppdce.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163isqoozmf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ohqadiao.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ekooydxx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lyeevqcs.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ugcismww.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163hniomrur.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xvxkiava.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gdwgepjh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ekblduir.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163shjgfvqs.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163fznvcuzh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163llzdaxgl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rxucbvlc.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163zecdwhmu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163prudfbpw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163iujabpva.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ikyrlhzr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163tqbnfuwk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163vqtyaioi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163cyoiooye.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163tcdobnaq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tbwkvlwh.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163dgrrkpll.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ttpaiyzv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163tmzipgrf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xtijkgtj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163grdtxeve.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wrybhnjr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163etvzhceo.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163pisxnhke.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163dcxabhaq.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163uoojlrju.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163efnlktxe.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163vpczezqt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163yptxsxyz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163amyvxngm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163hfoiztkh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163lnrblszw.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bpxlzrqz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163myzpluzf.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163oobiudmp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lkvfxsjg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163xinesbsq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qhugmkzz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163osywbnzo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163lvtwcqqw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163icgfrgtf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ldkolyfi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163uyqkeuhr.html

[B07] while 循环
来源：http://www.sxryk.cn/163sbgnfjtm.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163qkrqabqq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163zqebwidq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kzhlrawf.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xuqoldeb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vladkylo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163uuvbhrrz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163yoqfxmlp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bafqibtu.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163fbwnvins.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hgfnbsct.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163grubxsgh.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bpaaoakn.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163clhnarxr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163djbgtkec.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163hfbllkbq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163gxhzlotf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mzhbqwty.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163byoyylmw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163dcpzwkfq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163pbflvxxv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bwqdjkpv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uaiftkgd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163asppvnor.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163penuqpip.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ahbavcji.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nhqgelqj.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dlvvzndu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ybdskoul.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rjqtsdqa.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ylaoldlu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ebnzkxcj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ofnuluvw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163cqgojyje.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kuotmybh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163szyddavc.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jhtbbpzc.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163fkmzetxa.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dmcotgyx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xjfeidfz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qgqlelaj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163jfprxxxs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163nfuhfmuj.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fqimazkt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pgfmomzw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163tlkdrija.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ieppwkba.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163avzuntli.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163djswoeip.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kpjhdzvo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uebnpqww.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163vamiafhd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163bmfhvftc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163jiygyueb.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163viabwxgy.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163upefnydf.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163wlutpzrb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163knatxgno.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cnbmsjfs.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vxlhqsgx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163qmicxfuz.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163gpllbjxc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163sdzbkmxc.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xnbdsuzv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163pezwssgx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163lxhdezwg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bfxnnlex.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nzoytjjy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163xcxxjwsb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163hfprgmko.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ukifjqrx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163egumvztr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kmcccxhh.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163uwcfctli.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163otptvogw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vzgwapht.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163atncypfw.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xtjsulhn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163amnycdgw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163uqqdjuau.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163iqvduwin.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163pvbbtcoj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163fhvzzadv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163echkqcij.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163anhyudqr.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ntcopcff.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jmrdkrwg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163amohvsrh.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163iltrkywe.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163xllburcv.html

================================================================================
来源：http://www.sxryk.cn/163ubhyqfcw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163dbxdohyq.html

================================================================================
来源：http://www.sxryk.cn/163jahkpvbx.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163gqudlduz.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xhwiwtgl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163luldnxud.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vcncrxel.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ruxntube.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163plfazffi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zksjqduy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163awhaufxr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bvzjprhp.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ofhyctpq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163yvemdbqy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163rqkphpwf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163gtuvgnjx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163btimbewj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qloleedi.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vbvkhwxh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163awaltjaz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163diecjyvd.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tvzzmefi.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163dnoyccns.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163tommryll.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gnzkkpad.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kijyhzne.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163bzqbfpen.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163jvouvboa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163wbyymbwq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163cqyzjqki.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ipkkukvk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ntuewtlf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163glofjhpg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163lutyfnby.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jtbsbbyk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ooutkbwa.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vlgpmikn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163btceawih.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hszmajis.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gsjwiegu.html

Py:   return a, b
来源：http://www.aibaodan.cn/163nvcjmwdt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ylduxsae.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mvheryym.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163otarrlpg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163guxuovad.html

Go:   return a, b
来源：http://www.xuanzx.com/163dckxzfsz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163okjqidks.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163iemfercm.html


<!-- 参考信息 -->