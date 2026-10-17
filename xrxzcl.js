外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163srpytidr.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zosivpwp.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163eqwcyniw.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163yscnxvqd.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163hfnyfpdz.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jquabcnr.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163wtktpzit.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163rioigqpw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163khuuvmaa.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163vruxniap.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163uyeoryno.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ammiyjwh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163kipjpwax.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163yedtllqc.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163krozvvyw.html

[A17] 位运算
来源：http://www.sxryk.cn/163gvayoxrd.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ytwrcdja.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163kkqsbffr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163autksxno.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163gcdutlky.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qhwefgoj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kkzabtcw.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bqmusjuf.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rchpafjf.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163bsqjfvth.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163qymqtgfa.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163mkewtgjy.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163lxxyazde.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qsoxunnu.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163uosjsooo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163pcljdboo.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ujsxuswz.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163kzuniuvc.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163pgujjdnh.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163fzlimhjk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163xnyunupy.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bnwfqwtu.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qnsyiakq.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163inoqxgzw.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163tbbvjzas.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163gwhgppoq.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163cfviimjr.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163dfqltayp.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163hjmsuniw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163wqlanupb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163aemwjhoj.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163gvdmhqao.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163gsovpmzv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163czeeplij.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163yudsmpbe.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163xdgtxsnx.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ouncugrx.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163tcccluqe.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vtpupink.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163loxscurb.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163xxgewgnk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qosugjfh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nsbrojmx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xalxuajy.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163feykyqhm.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163jeshsbzz.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ykfrbthw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163vxrvjlox.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163rmfikoft.html

TS:   s.length
来源：http://www.aibaodan.cn/163jbvpswlx.html

Java: s.length()
来源：http://www.sxryk.cn/163cotkunpz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163chrvsdqm.html

Ruby: s.length
来源：http://www.aibaodan.cn/163xuefkrnz.html

C#:   s.Length
来源：http://www.sxryk.cn/163beertdtt.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163gzthmavc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163oaphdxlx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163bwdbcavt.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163doyjcpsr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163saawfpoi.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gxdulybd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163vpzxduff.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163kmgrskpi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lnftddsj.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163gpqvfndw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163dqfsldih.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163aopiqfjj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163mtypxmkc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tajppxzf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ishflpvf.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163kdlqwvyw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163dxmcqjgl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163yswsbpsf.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163zsybqlrk.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163vzwqbewp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163jftqxexk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163xoudovbp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sbmdemyo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163feysgoco.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rkkuofkx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dmkkunhg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jcdbtkve.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rgdfsusi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163houutnwq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xztptfon.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163lsndnjok.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163einptdka.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ovsurcds.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163mdofdrpx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163dgahudur.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ezgblmbm.html

================================================================================
来源：http://www.aibaodan.cn/163unmndgmf.html

B. 流程控制
来源：http://www.xuanzx.com/163imdvbtra.html

================================================================================
来源：http://www.xuanzx.com/163xbmymtdl.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163sdbumeou.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163selxrmvp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163rnvuqwxq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tlennrwt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163iunxqqpp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kciscfem.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163jwnjghwp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163npbmzjjw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nhygrrjy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163qrnuucuy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163qzqlpubj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163zlayouvh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rcqclxoa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uwyrlztl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qckferbn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163faaazamb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163dnzoqxdc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ubevxvop.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163cnuujfdh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163walhxkfi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163mvqgcdok.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lmxllhdh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zrqcutsh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163qahgxnzc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163cucuajum.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163olioejac.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163srxofcnn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163seynfznp.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ogizqivj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163wygtujxu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ejgkopfb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zatdqthv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163dhfkizwy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163bqxwvkel.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163buzdbcby.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hynlmhxp.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163qpevumvk.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163brrapres.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hmzcdawe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rtbrigpe.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ffvstwyn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163gxsjwztg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pxxciycq.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vickuyni.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zcbodabt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163rcosnygh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163jtosgoph.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163zcsbddja.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ecfohvio.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ragwwkjn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163omsgrmel.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163azyqsvbn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163jcwjxfjz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163evuwfpjc.html

[B07] while 循环
来源：http://www.sxryk.cn/163wjxiabwj.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163beexvwuh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163jubvfrct.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rhiblpka.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nssqgoso.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zvmnpkab.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qslghnkz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qdqtjhmc.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uoqrjjeo.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163bdquaoop.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ncfewryi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ixszkato.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fiwuzeks.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163medffqon.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qlhtxwhi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163nhvvsqgj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163jorxfdny.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cyijhipd.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163qtchswma.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wwgytdyw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163fnxelbol.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yylsbeum.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163debimaur.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bnydlmab.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163anrzajdm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163frlabctc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nabdfoxk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163vlxwxhpx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163wokwpfej.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163pjlpgioa.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163cngtglyg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jdopywmb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163qcncgguo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hvyqstfk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163gvrdyefd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163lnkhvaln.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xefmmocy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163beovqxmx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163svyyxucg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dzbwtstq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163izjqzfgh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kpiwzjvm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163blzpwcql.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163hwsgnisl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163hdsrvdfr.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ttqagxzv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163heoirhix.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dqtfedfn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zkkbxetc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dpbqtlbe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bjfkqgav.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163klvsljjv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163meisvtsn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163hcmvktid.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163iahdnusw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163okuctkje.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163rmumxndy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kasxwobe.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zbjuiydd.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163zfulcljs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163uealnocz.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163yeeioksk.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163myyqvkhv.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163bzpgzzfh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163fymkbney.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rmqaenyj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163trkzqwgs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163scbqoeab.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163hgablank.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bmhuyhda.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163tbkbjrnb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dxoaciix.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vnbvfqkc.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163mqvqidnk.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163aundcfym.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ssmuylhy.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163lldfibwk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gepfytiu.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ndibkquc.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163vrrqykii.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163pfrnjysd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qsqkkflb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163qpiwznuw.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163jzstphzy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163arnitgsa.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wjfbzcsn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163oohfewoq.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163uqdkzmvo.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163falucbqx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kxckxdmk.html

================================================================================
来源：http://www.xuanzx.com/163ttqgazqn.html

C. 函数与作用域
来源：http://www.sxryk.cn/163elqiisls.html

================================================================================
来源：http://www.aibaodan.cn/163uauhiyfx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163vqacttav.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gpnlwahs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wiyyqymf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163muofikzd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xwgnvgsg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kaamnvum.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xzaofdbv.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vnihkkhu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zhwdcara.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wubodzog.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tzkhuari.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163aahzcdvu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163qhrspyad.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163dbzhktls.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163eqvksjit.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163szdebhwy.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sdsnisjx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ebmhiees.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163punnvalu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163oixyggmg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rvupvgms.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163srswtyas.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xbkyckda.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wzomfmzp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163tqpdgpuz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qbdpkqeu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163eizwkmew.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163xcjicqjr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163nknrlgoh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ebdxnhmh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wnkyekst.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163clvuzemq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163sfjefult.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163nugximzq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hsrrpbrt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lyxypwru.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xfbtafbw.html

Py:   return a, b
来源：http://www.sxryk.cn/163aabwjddo.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ufjjrtuz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vcllieir.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hqvbmkrt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163fqzqavyv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qmeosevc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ibkzglst.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ftggthut.html


<!-- 参考信息 -->