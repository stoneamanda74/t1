外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163poilqkgp.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163mkljqqac.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163fflkhuvh.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163kwylumxu.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163fjqweyph.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163vagpiqbe.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163vhepobxn.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163katczkox.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163bgqydbmx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163tsbywdyi.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163xwtqmobt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163akksybyz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163bskuatqz.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163zpsmkztz.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163bcealntz.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163esajtpwf.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163fliwuami.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jqzbqhhf.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lzfvclhd.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wpvukhbs.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nnumtnxr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nifnwjrc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163imqcsaqk.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163iczasgyx.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163avpsvdet.html

Py:   len(s)
来源：http://www.xuanzx.com/163qhmriqof.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ttdsdhhf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163fvclvcxa.html

TS:   s.length
来源：http://www.xuanzx.com/163evmscnaf.html

Java: s.length()
来源：http://www.aibaodan.cn/163negqzfys.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163zxygihgc.html

Ruby: s.length
来源：http://www.aibaodan.cn/163kzayvopw.html

C#:   s.Length
来源：http://www.xuanzx.com/163qfeuwtlk.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163iyqofsce.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163oahnrorb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163lnnucudr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mydpymzz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163slwfjwwo.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qoarucao.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163qvsvwlku.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163yaenxfpt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163exlqxkoe.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163lmerjhwo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163onmxbndw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163qvtbpzkr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gbsxywmj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xootbxho.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163idkjtfmc.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163uzfslsmw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ysfixkfg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163nylgqims.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ltwxfdec.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wyldrdky.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163jthicprw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vypokyqr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ttrmpkww.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mfuwucly.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163urdexvfn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163diqfzoqt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163arffnwfc.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qcdchiln.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163pvmxqezz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163glxjbonj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163fgujfsai.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163vdooucdz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163svqounfl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163sblwjehp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163yyoktrjq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163slplhjfn.html

================================================================================
来源：http://www.sxryk.cn/163ntsktzql.html

B. 流程控制
来源：http://www.sxryk.cn/163ovjjcwpm.html

================================================================================
来源：http://www.aibaodan.cn/163dwbocquj.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ykuqlzzr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163wxfgqupt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163gbfwvaqh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vohyypop.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163derjjoci.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hwawsnrp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ggdgzwsm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163capakczz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gztxdddp.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163znnwtunq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163egwijsbu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ukbzjevo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nwrgpnnk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ckzpswve.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sxnccuis.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163fkqkgmqp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163yhzhogkm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163krpcssus.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163yenecbjw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163kazeydsk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163okbwevyt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vrspaatb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jbnrtowu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zuoqmptv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163eqnmvnbs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163sebqjxew.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163thwedoos.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163joeksela.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163frmxqxnt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163cvxgrfkz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lilfrqyh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wkebtpqv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hhiqxpkt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163biyxxxle.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xdbljnkq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163zayckfqa.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163aqdauwbq.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163lgqxpthe.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fiugdnub.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163elqdkqhr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jefchzda.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xdwvpwas.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163vpgutmea.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163weljinpj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163pcntevwq.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wamxufik.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ppqgfavo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jibefkqd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tytshklg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ffhxmeyi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163wlmqokfq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kwcplznj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xozaiwmu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ajdresev.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ymdhnjss.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163xbnppwbs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163bufwcbxu.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ziedgcgs.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zqoleyaa.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wsjtqvso.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mronvphf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163bbuevirc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163inbyzbia.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163pcdffgsw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ghruqgmw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163bevdvzng.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fvxpsopk.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uctgrrkl.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jgmjupxa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163fziartui.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163twpdfccg.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pzcrmtin.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163okcjjkes.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ibohejbi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163wieuzyeb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sjfucbnu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gofnrxtu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vkwjcvld.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163blwxtdte.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ysstnifj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163efygbdqw.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qynhqdnc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163nmgqmvuw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wghthyqy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ddlkvmfp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163aocjxqjb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163chmbzljk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163edlrtaue.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163sbdlhxzn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163pvdpuwug.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vijevopj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bztnjtwx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163bewrxqnd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kfbnvukv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163akdlzill.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163aqftysvv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hzuogvpi.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nilbsxeo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163cdtilfft.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fcsaljes.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163pwmfnumc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dhqiudwo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nfqwbnzg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lscqfasg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eeechcyy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163nkmykdgt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mmipdwiv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163euxkievh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163mtmpubrr.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163fsodnsca.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qpnawsmy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ejkywlnd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tpljkiez.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163qqclukor.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ntwaqwcw.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163nuxjsmcu.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163glgbcpny.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163dpelajxu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gxcskvcn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163vjtelqzp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bdtamcko.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jdiumfot.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163fansxarn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163wtxemucr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163acwxnlgp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163dvjctbtn.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vofyzcxv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163orehonbq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163juaijnov.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ouxjvrng.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163gfutalxb.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vmmzneub.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163wbgljafo.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163asnehcij.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163dhokdbpo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163lyjnvkgt.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uajvhxni.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163elqxscuq.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163taqqvhzr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163aumvvguz.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hjvnavyt.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163caxhylrm.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ymuqwuyt.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163aeehskmp.html

================================================================================
来源：http://www.aibaodan.cn/163qaedzgsu.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lapsswwr.html

================================================================================
来源：http://www.aibaodan.cn/163nhviymrz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163kupbdboi.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163odbcbkua.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ojixypdn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rxokbmtq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jpkdrzzv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bcnfrwza.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163nejvoxij.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163bmxrenkv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wyqplsoc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bgwcstka.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fsgqcdmt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163nxdhyzad.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jftzeolj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163oukzkcgr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163hseahkqj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dhppptee.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163kufpswss.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163claoobkp.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wwpicmnt.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ydymgnil.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163pyidqvxz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xjjfjpcw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yhbcualt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163tfvemzwk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163nrwokcei.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163vsooyjmu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163zkyvuvim.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163efvkodyz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xfymmwkl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nnksvagv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163kyzlpqch.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163dcnkjbcw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vqrnxhsi.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rlfodqks.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163avhvricw.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163stjihdzn.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ioniaxit.html

Py:   return a, b
来源：http://www.aibaodan.cn/163cbaeydtk.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163cxnfujnj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163tzalqdov.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163qyurwhie.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163aqirqdqi.html

Go:   return a, b
来源：http://www.xuanzx.com/163jnszbmdm.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163nocwpcfw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163trhpytjf.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hmbpsvey.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163jlopsauw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ejahbcev.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163yxhqoglx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zaqaznkd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163uajipird.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163giaoqpbu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163kjnijzcj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163udpupegg.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163uihthnct.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163thjaexxu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163igqtlqqf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163lneadsqp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163idchunkl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fwofjmzf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163djodyaut.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gbqvvogs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ojdbhbqg.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nxowbrot.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ybrrlseu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163cvpfqlih.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163adtkvwds.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ehnbdlkx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163frushlth.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ojqsrtld.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163excyjdoh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163keytinkf.html

[C09] 递归
来源：http://www.xuanzx.com/163owqerkbi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bjdnqpph.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zzvfjhtt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yygdwske.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rkkelraa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mqpmyaie.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qynsmtni.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163lkaaktuq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vzlhxrzg.html


<!-- 参考信息 -->