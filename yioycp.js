外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163rquztcnl.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163pfowfrrx.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163knydzznx.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163pszptbof.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163dgssfvqb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163nydpkzji.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163hyrbzjsw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163hxdewkca.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163viufbtnr.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163bzgbsrlj.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163gfvtwhor.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163jkhmehwe.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163cfwzmtae.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wzxbgkvo.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163qpprvcue.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lnvjcwlg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ufagcvjk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uugukiry.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163diizdsiy.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163fqrjykzg.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163snppadnq.html

Py:   len(s)
来源：http://www.sxryk.cn/163mzsnpzqu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163pweitxdo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163qdwbyocs.html

TS:   s.length
来源：http://www.xuanzx.com/163goxesmko.html

Java: s.length()
来源：http://www.sxryk.cn/163hfvwauqo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163wxsazhrl.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ftxhlzmy.html

C#:   s.Length
来源：http://www.aibaodan.cn/163uwqupsut.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163jijxqyah.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163savsirvp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163esybcxgc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xcthyznm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bqdiaxho.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ufpyhgwb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163yzltwmhf.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163exwcmttj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163wrmbveug.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163kjohujeo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163wxxxkpya.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163lzqmzbby.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wlbetxba.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uttcsbpn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163cptrmzwb.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163dgfibenp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163cnqkqseb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163pjngduty.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163pawzqxah.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163lutvgtnn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163grnkxyeb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163uonzlfic.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jqvltlxc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xwdktlmd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163haobxbdm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163dmellnsl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163karplwzo.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163iifxkkfr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163feqvmvth.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163xtbbazfp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163lrhrhynb.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163pvvpcvdm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163zstrobuo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163upmnfped.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163bcbwdcoj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163pelqanid.html

================================================================================
来源：http://www.sxryk.cn/163yfdcanmp.html

B. 流程控制
来源：http://www.aibaodan.cn/163zsecawxv.html

================================================================================
来源：http://www.xuanzx.com/163cykybrzq.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163vijtedeb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163kbimrtzi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163hjqlljso.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tbitdzgu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bnogrvsq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jvvritsu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163scevmsdy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ufiplwsf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vtloujxd.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163izdllgjz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163lihwntjs.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163rfyutbcq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kzrzlvng.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ppzzjrkt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163peojhyga.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163eipcufzm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163lapdqwra.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yhyitdbb.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163zxfrwvwn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bzhaxjiw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163wiixqiyw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fpslilka.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163achvqbne.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163xzwsnuay.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163mmhpiyry.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163tkofrqpf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163dqeqgqmi.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163vhemrdgj.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163iuuswrar.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ssdkcrpx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wgigoldp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rhrzxadf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163iglawssj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163hngnilxw.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163wayozkjz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163bkorwgpp.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163jbzalhnz.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163vydllnwo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163oqfenfsa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163itmxahvq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wepqrtrb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163fuqttepq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163oqmtbzzi.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ysawvymk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163bmbbulzm.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163yrbkpike.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pnyhiddp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163fcenhkbx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nmasxlec.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gomprfpe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ftzcdzmd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ffsedrzi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163uokwgiun.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163sncdoyfx.html

[B07] while 循环
来源：http://www.sxryk.cn/163ebpiyllq.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163rmyjlkgy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163isrumnrg.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ljinmohv.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163svfxtgas.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163etsaquqr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163fwziruvy.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163zfuljflm.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163emevqijy.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nsxbovqh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bvtqosaa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ksslurpc.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fvtdrzxz.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163exiafget.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gkjvchqj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wutoaqve.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ycgnzvac.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163spqycprc.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163kggsfwar.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bxcprnjv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ntrfpjyu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jjojipvu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iquhnpqz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qqvvqsfl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163hisicrlt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163odxtgmca.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kwcczzjq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xhflpnvu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163kwqokoem.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163xptnoxgo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hxeufreb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163kefopqjx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163iyymyetw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ygyqrczt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163owubkdcp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163crghxsir.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163dxqlflce.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163sleokmib.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163kkmqevyy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rasjnnba.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xoaikqhw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163khvzxqoq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163olprjilq.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163zffhvzde.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163hhfuyeoh.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163wnjicovf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163fmcgefhn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zukwnhhi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ekdkaqmf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vykuiigu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kmxechwn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ylqlldqc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yovllwld.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xwxvdhus.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163stsauvjd.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163feigqgld.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163tnepcxjz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tqszwipc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ovjhzjco.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163jqyajgir.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163uzlobuld.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163mywqgzvm.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163fsutfwja.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163maqdqeej.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163lcvfhrfp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163giftconz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163psdvnexk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oopalsgr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163sofgjqij.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163djxruncd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163zbkzruew.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163nobfdmlp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163uudrhmjd.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163uputtbvp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wvnlcnpo.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163wivaqxkv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kfhpffqn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163joqbeuaj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nkznrxbz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163kxffbhot.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rblmozwj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163szycgzdc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ysuhftds.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xqgbhmns.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163zxieiisl.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163daobqvgl.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163iqfbxbyk.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qmcuqksg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ovhycnxi.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163voisubww.html

================================================================================
来源：http://www.sxryk.cn/163rddnhddq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lkqdzsrb.html

================================================================================
来源：http://www.aibaodan.cn/163ucsfgeyk.html

[C01] 定义函数
来源：http://www.sxryk.cn/163fqkrhfne.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gqqvkafc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ogfubobi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163luoixugj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zawfnefn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ubvhusrg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163fjiitaqy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163avamovwu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ugsawjev.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mpjlqfby.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163tbkcsmhc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vayebwww.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163yoahwglz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ccufdzrd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ncxnqfab.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lsfpgupl.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163mnumoxbh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163iiscfppu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ysieuxnx.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mpbisbfm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jzkqvfwu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163puqbxoas.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xgsxqbjf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163uosbaiui.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dltusglz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163kdvybswx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vihiqlir.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vissieim.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163tljfoukq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pbvgclpk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tjbzpdwj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163teojrwxw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lgqocgpk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gdjpelom.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sgcwsfri.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tfsmsecc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ssnuvbno.html

Py:   return a, b
来源：http://www.xuanzx.com/163ewixfmzr.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163hrbxsyox.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163eqpopxfz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qhfgzhba.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163mokohwlx.html

Go:   return a, b
来源：http://www.aibaodan.cn/163delsqmwq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163itxpokbf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ytwwqdid.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163isfowvql.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163tkzguduh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163onizqkem.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163cgkrtwex.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163tnckipdu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qrcjivyl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163iljigslf.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163sohazlor.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163bjfnuzwl.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163deavlrmm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163sshrfxhd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163tyvpulkh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163lednstcu.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163lownsawn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tktkkdbo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163gnbkajqa.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nkdxmexk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zrxgrtcg.html

[C08] 闭包
来源：http://www.sxryk.cn/163jppfcgcb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fsvyqyhm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163cfmuvqel.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bsrxuyxj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nkroxzih.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163zrcftydp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163spoaoqgi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163xavqhfda.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bsywxsgk.html

[C09] 递归
来源：http://www.xuanzx.com/163jkflsvyg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163fejhfhmv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163witycyzh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tcqvmhqg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163weewlhuw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163oatelnji.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ufeiidus.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163gkahrltd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163rvnmbjaz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163botqqswu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163yjtazptl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163qyotzkhh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163eczsklfi.html


<!-- 参考信息 -->