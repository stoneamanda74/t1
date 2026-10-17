外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163cafxyabl.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163xmkghktx.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163fxkvacpa.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163cpwnrnhj.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163xtioftzj.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163luyewonp.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163kolwyoil.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163friwebnb.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ypxlyowe.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163eydgqkna.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163jclalers.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163ivhhukbu.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ewxsmgow.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163dxmbsznb.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163raicuoqn.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163kfomspuh.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163oudcwehp.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163offcvoqz.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163lzgzfqef.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163owhcactq.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163geopxjki.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163acsltjeu.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163yamuylyc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163rdsnvwey.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163paofyola.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ojnuuieb.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163hpejqmul.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163txibtiik.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163kdsjhwgy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qvyrvhqp.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163towtgzfb.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163eajlpznq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163husxyzbv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cnwxqbjz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dzgjolon.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163pmrhofjh.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163rhxyxtpv.html

Py:   len(s)
来源：http://www.aibaodan.cn/163wtzylokc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163furslbtn.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163upjelgyu.html

TS:   s.length
来源：http://www.sxryk.cn/163zqlrddve.html

Java: s.length()
来源：http://www.aibaodan.cn/163ijdzwiwy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163xsmcpugq.html

Ruby: s.length
来源：http://www.xuanzx.com/163slguuklw.html

C#:   s.Length
来源：http://www.sxryk.cn/163ktxuafpp.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wnembdsh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163uqnefzdu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163agztgage.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nsuotfqb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ztyvxstn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163adgkovbl.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163mjjjehlz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163bfxvnvkj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gfduosyh.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163hzbmxzrv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163edhirahv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163drutubvy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163wjoxvqar.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163unehojbn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163otodttco.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ksslbafd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163lkbltbpb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163gafpfvoh.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163xmveuxfv.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163cmvxyacl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163uwbhgsjs.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hbkmvpgo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fbehnsby.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ivfbutja.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163xeutqdkf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163bdjsocjc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163yfxvobgj.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ifpiipuv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163trdtypjf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163slkrnawo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163sbqrsfnj.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163vqhqjtgo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163oiuyqrhl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163eeovuihs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163bgzrlwap.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ulipbqup.html

================================================================================
来源：http://www.xuanzx.com/163nchmptwg.html

B. 流程控制
来源：http://www.sxryk.cn/163dnutehfr.html

================================================================================
来源：http://www.xuanzx.com/163iefhugyo.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163iipbmmgp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163bnqpyjvc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163wqhhvcqp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163umumlapc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tfuuroos.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gwcoxngb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163zqidrmwo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163igoujuck.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gixfwcsd.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qrelzgoh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163lqjxyyca.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163jllqqkom.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hrriijiw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163otzdynzi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pktmwpsy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163jpcuwobx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rddczryu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163trabqteb.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163vciuvmxw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163olidhndv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163qsoajgoe.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xgpqteyb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163szerlhjy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163patzzpct.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163zxkplwnu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kyjuxloo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163itxqwnde.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163aamibiut.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qazxcnbp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163okinnlez.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qclvgtdc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vfaodpsc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163tuxzrbmm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vxoqunjp.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163iwqpvxub.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163hksboqzr.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163wounxhfv.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163dnpjwjpf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163rxlrmsqs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163yltlpboi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ekadkffa.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163crpckvst.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163arjcfutz.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163vxhidbpv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163gsqgmyyg.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163blxxnqgb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163bsmqcfih.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rzjjeoxf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nauhiacc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rwpjeqej.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163wmfvrqbk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kbaswryh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163oggcsodo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rqjqcpji.html

[B07] while 循环
来源：http://www.sxryk.cn/163zrmqgsrc.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163nxznpboi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kmxsxckm.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fbpwytdx.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163klaovtmy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mxqozvae.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163dmpwugvc.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163xyquwgzc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bqzhtrip.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163yrsvreuh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163nauyjvhp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163qvucfxko.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rgvsricq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163srdjfgod.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fkkwcucr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163rjsijymt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nzajssea.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163agyxvkdq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zubeozio.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163scxekztt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163uflkwygi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zfhkvxer.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dlfwfvin.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yoleacxo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ivwfbdwj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163mryfgfgm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163anjbmjem.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163pyzdybjb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163havvnwgv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163yvgbndcb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163xqydiydz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qeucwqei.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163znvuwkkh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163tlzlrrhv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163wcufvcqk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163awtmdwva.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ivjgbaeh.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ykreyrsm.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ulajwexj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163imdoiowj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dckjoasr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163lsqucxud.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163nfcwxlwc.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163swkfflmt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163lurjglhu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163qevspgui.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163aafmhoax.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163cbgqacmn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hnyqzohd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163abqtsfqn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163elhypmgh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163jburohnt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mfcipwqp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163thkpzqrn.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163kwhhwfyi.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qmbxsbuc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163xicpoopn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zcrjjplw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ibajhdfx.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163iytgzhbx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hwsnlenw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163myanbnbj.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lpxaxqbx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ibdetiod.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hifhjtgy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tntasnpi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ucsfumqw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wdargbiv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ttturqod.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163foyydmof.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163nqntqgsu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tfoenuxp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xppylnxx.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163dmvvcuow.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163hgqlggoy.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ssbeidyd.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163wztrjpsm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163pqjulfcn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xgiyujzr.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163thgaydly.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rwzigokl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163hitiiqyt.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ifluuqvy.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163matfdxom.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163nosrsyyw.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vgkvveur.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gixqzwok.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mxsdsipf.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gofscwzf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163poneroly.html

================================================================================
来源：http://www.xuanzx.com/163dpsqmmhr.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163bzgqbbnz.html

================================================================================
来源：http://www.sxryk.cn/163utrmvwnp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163kbjrruim.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qxeycezw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jbtchmzr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163qbolypzt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fwklvamz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iadllrhy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163pwixdaom.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163jlsbdnsk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xfkhozmk.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jhgvsulx.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163lfwwvetl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163znndckyk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163maqeojje.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163rmlmnolt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vjoarxch.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163hdmavekl.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ddbozljp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163noyqnmaj.html

[C03] 可变参数
来源：http://www.sxryk.cn/163nqidtcdo.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fspovsnt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163gidlvonj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ekjjgoti.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hvhiuyop.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163snsdtyjc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ewirxdna.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163efhrpwer.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163dzzvwmds.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fpkncflq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163znqczezm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163narszsak.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163monmqhsj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qzukjbzo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bqgtvkts.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163siguagsa.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dlmqarst.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vqlmazup.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163brxzmjlz.html

Py:   return a, b
来源：http://www.sxryk.cn/163itmmxfwo.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163uztlhduc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163bjroqgbk.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163srsogwhh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ptxaijvl.html

Go:   return a, b
来源：http://www.xuanzx.com/163mpvkujnf.html

Ruby: return a, b
来源：http://www.xuanzx.com/163gssvsoms.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163iomsjosv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163yavejayi.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pejemubk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163pvifvlad.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uhsufbxg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ukhavxgx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bzcvbubp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ndvggydz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163yjwomzxb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163oclaggow.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163fucfruih.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163bpkfkues.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ebrxkuwr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163dnjjdkou.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163omhkbgfs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163kgmjbhzv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mmhamqpx.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163pibkjazn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163tkmjtcof.html

[C08] 闭包
来源：http://www.sxryk.cn/163jqdiwyby.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uwhvfoeg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xjfcbedm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ewfwurhr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tgdncacf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163jgaajqte.html


<!-- 参考信息 -->