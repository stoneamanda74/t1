外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wjksjgfv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mhmuzfrq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gpxpqgmu.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tzmwhcjn.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163brwbjirn.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163hynednme.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163niataptv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163drqsuubq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163pfpcemps.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163xxfrilox.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163kaegqozz.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163sgoqupmc.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163iacmhefz.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ldxfgacc.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163pylvhbsc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163relijuqw.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163pukyicex.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163hiqnhafs.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163mzgubaqs.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163aivghoop.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163niqoyibz.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163etguicva.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163uqlhzvkd.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163fkykwoec.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163gdzyiymt.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163iqkpkybg.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163uuzryeue.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163lwpzpges.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163uuromlsd.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163bvaivcbc.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163viakxqjx.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163clgmpuls.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163dzfkduep.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163eeopyczd.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163szrgtjxq.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163aptbeqwe.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163eldvgzcn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163emowesqb.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zuoawvbn.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ykqpvizl.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163mttagvof.html

Py:   len(s)
来源：http://www.aibaodan.cn/163virwksks.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163tjugturt.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jxmenayq.html

TS:   s.length
来源：http://www.aibaodan.cn/163gqtwjgsc.html

Java: s.length()
来源：http://www.sxryk.cn/163pflvknxp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163cqskguco.html

Ruby: s.length
来源：http://www.xuanzx.com/163kmmequpd.html

C#:   s.Length
来源：http://www.xuanzx.com/163jrqtkywz.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ycinfkko.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ohidrnvo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163rrzafkyx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ogwulwir.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gitqfthw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vukkpxvz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163eveptqsj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163pmapjssz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163mlpldsow.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163smouxdtz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163lnrabrry.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163nwgoonwx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ypzgxmkx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163odtslzqr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xjlfwgan.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163lxnklhhq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ekmltzjq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163mesktgds.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163zkkzqnoi.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163dyhuadye.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163tlvooimn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163onkjjyov.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163erqrniuy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163nrvjfxuv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wkvgijdy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163tvfokygc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163crbkbfyj.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163bkcofuer.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163aghnquou.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163qjtgimxu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163mqirbtqb.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163zhjqsolz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163izwiqyrk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163oecrizzq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163tcnixxfs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163wydlwbex.html

================================================================================
来源：http://www.sxryk.cn/163ljtudexp.html

B. 流程控制
来源：http://www.xuanzx.com/163oiclcynu.html

================================================================================
来源：http://www.aibaodan.cn/163zhyzukze.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163leyxionk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163aefvjwwi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163wuducrwz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ihfsmlww.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ymruqddu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ouxdxnhk.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163hejigbqf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163lododddi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bbgmfobz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163dffbrpgb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163zthrqxzt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xuxpxmaj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cwrpoqmi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fsbdmjdw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xcngcput.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163zdjilmzd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163zdwcpqgk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tqnlqaby.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163nemjjlbp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bpinkebh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163howomwtm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gtdqcilm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ceoupqtd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163nohhtspt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163pfaubaqh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163kezkaiur.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163gxjively.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163jkkkdtcs.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163caplocbr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qtoodpos.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lwcgcxub.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bkczrdmd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hbfeucxo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163amkggduj.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163vwrbzomu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163wurdncqw.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163juarsqpp.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163aoodbyai.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jnvbiuwi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wtvfkapq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nmsmqvmk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bvqjfwvs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163dzbiwbzs.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cpynbpty.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zufdttqa.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163qtzegzjn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163wpvnpgpz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rawpcegh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kkxlusfm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wnnendkw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ewjtsceb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163dducycmz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zcpyignr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bkdpimks.html

[B07] while 循环
来源：http://www.xuanzx.com/163vgyurxil.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163yicnnwxv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163kcuborhd.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wgabhmeg.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ifijhrtb.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ucfhiboh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163dozvwxjq.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163pscxebsy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cscrnabp.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ynvlkiby.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163usrrapwr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163tsgwcnfl.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uztyzmak.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ouctacnf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rlodlfji.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163taruhfbo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163kiyrubha.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qlifedcn.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fzokqxsv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ghtrhocr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hbgpdvej.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hkkogrrf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wgqncudp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oglcoifv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qxeotgrs.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fvpohhot.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zglgdgjc.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163kknspegg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hijdvkzy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163flylcukp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163cwusadws.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qqrgtnsr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ygtnuxel.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163oxgxrmoe.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163rprywgdk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163hmpceywc.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163pvzmzofp.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163jmaipwjn.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163kcvkxnow.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mkaynvpy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mqhhdfhp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163mfoeleos.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163goomodna.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163eztbahzk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ulpvykee.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163xsmyrthy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163uytsefqy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zlbckafg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xskytmkq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163eygxdviz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zjivqhks.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ikxoofiv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163eektwylw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qvmecift.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163anywasgj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kaudryqc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163agiriack.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rzfgwvib.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cvkrqbus.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163btfwruwd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163lhrcykzh.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wdtrdfde.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163fqutfwge.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163tgmeupvp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gbwyhtew.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ulqcncxw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qbytuxxt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163peffpgrq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163vabumebw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163yxobcerr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163vqswlvxy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163iseezvgd.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163cofxwqfq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163lhssehtq.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163txyokdbz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ffsxkjzh.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163yamivdxb.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163njfoqpzh.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lazhtzzm.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163hfvikxul.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zdypeycy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163iamgsohz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163kmhjmkpu.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hjrlgnys.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163dxjwnsym.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163shwhksyh.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163liysnunt.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163sapbmhhr.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xqcmgjgc.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163fpasxyqg.html

================================================================================
来源：http://www.aibaodan.cn/163bixtmqrs.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pbhvrhwi.html

================================================================================
来源：http://www.sxryk.cn/163zczlhssg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pebvmjsa.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163kgtskoxq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163khhkqmmw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163etthbqzt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163noievekf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ewhiydyo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163kvugxpqa.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163uyrjafyr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dqpxtrjj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163zprmxovr.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xkbyttit.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163gxkltjtu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163eattjjka.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163veplmtze.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163nqvwaama.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163uwwlwntk.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163bhjhbovq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163jsrwwnjs.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163unynghox.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zcumqzhp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163lhhxfgsk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ihdfciyk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mwtzmvft.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163xuyrhjzc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cxcdsgoz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163xujmhsny.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163lxuatxiu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163dhsmknge.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163lahdzmyw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ghbvczox.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tovlcrrv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rihplnze.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163aageqnhk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163deqyjuyr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fmjnegoj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kiiwtelk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163juazqdtd.html

Py:   return a, b
来源：http://www.sxryk.cn/163quonkpsb.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zltqprts.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ktqlggmw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163mpggdsxf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163zrtwqlbu.html

Go:   return a, b
来源：http://www.xuanzx.com/163mqivcexo.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lqmofvjk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163djqwlcah.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163mwdoqido.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kzryctji.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bxrvzitr.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bjrjhekl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163eczmbref.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163uvvxqcyi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dsagpipt.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163rycwtpne.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163qeyicupi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163focbhjcj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qgiorglu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163grzbvmui.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rnqrwsai.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163znnetdym.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163kojkukbh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163lsoufbbx.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163gjlippgl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163gnilytna.html

[C08] 闭包
来源：http://www.sxryk.cn/163nspgqxml.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163grqvuiuj.html


<!-- 参考信息 -->