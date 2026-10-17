外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vuiijmic.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163xqarsssu.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163xgmiuryz.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163rrdewvgm.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163mefiwjrc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vsqfunth.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163cxqygoqm.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163svahlwnz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163tdesphwe.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163vkewauie.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163bykpjjie.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163yvzhwbcu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163rzrfyvpw.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163mtymhbpc.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163yppceamh.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ztpnhwgs.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163bdclrtwg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mbxkslbu.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163oacbiklh.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ukljwrsi.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163asdntuwb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fwgdosgz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hebmxaug.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163cbkglzar.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163agcmvzse.html

Py:   len(s)
来源：http://www.aibaodan.cn/163qqaljlvu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163hpjfovsl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163kwvlzgcf.html

TS:   s.length
来源：http://www.aibaodan.cn/163ciwonwee.html

Java: s.length()
来源：http://www.aibaodan.cn/163vxyfvxda.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163kehldmjy.html

Ruby: s.length
来源：http://www.aibaodan.cn/163yqsssoeg.html

C#:   s.Length
来源：http://www.xuanzx.com/163rofbivsl.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163veweadqj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163uhdavbcs.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ymlsfkhi.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qqfzbuzg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jwbkzsmx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163azbsoyor.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163oyuabwhb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163pmkpdpkz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163neyfodlq.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163lloyxwcn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163zywwnbxp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163cvrgutvm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163fvkytqmk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dtzgaltz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163fdjvtkli.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163xvjdguxp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163elkmulsw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163almykwmv.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163qygnqbhi.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163apwavnnw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163rpihvamn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163oijwunwl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163esrbmiot.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ftkyxrns.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163aqgzkban.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163whfpywky.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163sufitfkk.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163kwkqnzvm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bsgltuew.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163fkrlswlv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163cisfsbwg.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163hlgcklul.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vzdcsmoy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qxvrgrsq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163qzoijikt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163lpplcesf.html

================================================================================
来源：http://www.sxryk.cn/163skvqiwkw.html

B. 流程控制
来源：http://www.sxryk.cn/163oorqwadr.html

================================================================================
来源：http://www.aibaodan.cn/163ooumbqkj.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163wyqlkeru.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163qvcnxcnj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163juayqqwe.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wtwebjys.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jtgabeet.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ktuwbgvp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163iyyxycvm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163dexarpal.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wrveniwl.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163uxzzmfbd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ozfubpek.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163cpkiymzt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fqxqdwoc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uhlznbel.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gkjfxrko.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163fehfdgut.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163iwrociac.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lnccadxv.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163mzhmszgv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ummqwazz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163uqqcqgjl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wkidqlwq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163masygddb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ssorngfw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163fdxkcbub.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nxbksthe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sbgovdnq.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163qpkuayou.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163lqtmnnfc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163auzvbcjq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kjerxcrf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hipqdtsh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bappmroq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163pjcxssow.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jjmaqzjp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163sxkyflxd.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163braseyug.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ybnapqbs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163vlrzrrbk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163slykmhco.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qebvhtyj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163edtwjchl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163kzkrbajl.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jwqsjrrc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163qnhctptw.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163lflesgag.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163kghsftgz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163pqozpbkl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zlewvmqh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163exixmron.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163fxixxyaa.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163egvisiqu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163xgajxnlf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vpxvnjss.html

[B07] while 循环
来源：http://www.sxryk.cn/163twkwiznq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ogpzndah.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163jcfcixxs.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163otammpph.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163venbctfa.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mcyokcxa.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163nrxtdctn.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163yalrrhyr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xxakvyhf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163aklsvwpp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163kwawoxcc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163fvoxamrs.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ukiftnen.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zqoxrako.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wmlubzbd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ugeyxuxn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163wepovrdo.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hlcglvqz.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163aeaoeded.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163mtodfqxf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163naiferqp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fyvsytke.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dquzkgzc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jrcjqedk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163fmopoczq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163hrcpzrkr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uizqxvmb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163pwwjgnzs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163iiseuqzh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163zjecmepm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163pmwdcpqz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163nzulqsca.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163mpthrllb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gvwpyxrg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lowwknob.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163mmcrchft.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gokdspvx.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163paboskhf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163zrdncset.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163metvlece.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xipmhmxq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ctnfinbe.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zeeankpp.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nneiflnd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163lhvifxyq.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ptiorfyk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163limqpvki.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163djdysrnn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cdntkoqc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163czjmnlvd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zekpwpvv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163hdvgnddg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ivkngljb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mhzxycyz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qugqqpmt.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163whnslshq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cmwpfzae.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rzshvhpl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ycgmoinp.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163okzdyzqr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163xaajrysx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163usfiukjd.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dxftdxaz.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163jbcxqonz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163dkepwbhk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hdwhkpad.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bmhidpsy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163knypftjc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163tcgazskf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163jcrjhnfg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163viemhkez.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vinhlzun.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163vbzbdanr.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163crsygddc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163dkikapbl.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163kxfxbylq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163rjdfzkkn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vgdppurj.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163rykecypd.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163zixsvxhx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gvseorzz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qnkxgrhi.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163innveqlg.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hgwruoup.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163obbjblwo.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163jcmdknsg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163oejjijot.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163byuhkgfo.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ycojitzs.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163pgsbcvdu.html

================================================================================
来源：http://www.xuanzx.com/163eyxsizli.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xcvetcxt.html

================================================================================
来源：http://www.sxryk.cn/163kpygamut.html

[C01] 定义函数
来源：http://www.xuanzx.com/163psbqbgxw.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163srqyppnc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zqbunlqk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163tbvzuotk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163flzmdzky.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dxmjzfan.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hzfrkcxv.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163roiamfmc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tefuvoww.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hchxiiwb.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hrpdjuvx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163tyswgzcr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163suigrvrh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163hvohoavt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163otosursu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163phzvwdvv.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163snntbisb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163smrqfsbx.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hfzciudy.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163kaslhviy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163piqsbuyx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nakfuwzl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dzovcdkp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163sbfoxgbm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kszogbgg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vlqipmzz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qexikmnh.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qnpwvevc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rfrnshtk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163odciayos.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nwtiqcvv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163lyyjdedx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163xconjmjg.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163gwjdszlz.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ukmxluun.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163twcxpotf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ejnkmwwi.html

Py:   return a, b
来源：http://www.xuanzx.com/163wpvpxlbg.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163yqsmrtml.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163krfaomhf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xknemhwn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163omwdxynk.html

Go:   return a, b
来源：http://www.sxryk.cn/163xoaefxou.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qkhwgvha.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qqgkvgfs.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163lclixcyf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163zkgnnhsr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163luitperg.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163imskubjc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mdxqjocx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ivhscwhi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163dluajmmx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163vclfzteg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163clgwnwlb.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163tjwjjjlu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163pebjwhxi.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mkzifmqb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163cmeojwhi.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mgxexyhf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163pczyiiex.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163hwtrfsqc.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163gevtytxt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163kzooajmq.html

[C08] 闭包
来源：http://www.sxryk.cn/163ojimlmbe.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163nptveahk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xxujqjyl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tbhnqxxy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xjiolkhf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sjwzrhkn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163lsvbhewr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163sewcixjz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lzoxgrlf.html

[C09] 递归
来源：http://www.sxryk.cn/163oxbppmvy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163nonpjsml.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163pumlwmtq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mgcihggc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ykxszrtr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mmpzrvhv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wytesmlp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ekvmvxym.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zpreysuw.html


<!-- 参考信息 -->