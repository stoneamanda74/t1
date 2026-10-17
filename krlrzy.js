外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163tguagote.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163rsuyuvqi.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163vyjvjmzq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ihxkmkxb.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163yknltbou.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163nigeboer.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163vsalfkmr.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163cocqybry.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163bflfubgw.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163twqkapfn.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163fnditluh.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163slkzgvdf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163mtpjvqzb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163yleipdyc.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163lchkhpoo.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163cymezgze.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163kscqtvmu.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163bpoxsgyy.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163akywzdpg.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163mqodtuun.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ehbuxyas.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gwfkevne.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ahccwklu.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163agnxtinv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mfyaqptj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163peyzeknw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hpvndcro.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163zepqdrvh.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163nrjswvfk.html

Py:   len(s)
来源：http://www.aibaodan.cn/163lmdbvocc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163duqvyjyc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163pbzixzbs.html

TS:   s.length
来源：http://www.sxryk.cn/163mspgfnvl.html

Java: s.length()
来源：http://www.xuanzx.com/163mwwqoesr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163exaxfvio.html

Ruby: s.length
来源：http://www.aibaodan.cn/163fohqjaus.html

C#:   s.Length
来源：http://www.xuanzx.com/163jcbttfjs.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163gbmdijro.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163jwqoedzt.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ujplhhcq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vbxaqxxc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vcdsmnae.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dsinuhdq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163avrqglfj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163afplgcow.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lxmdngyi.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163uuaherry.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ywgcmina.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ulhhsllw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163hniacozq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lfhkcihe.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163tvvberxh.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163syjtxvin.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163jiburzxl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163kwgftfsa.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163urobvtmw.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163csoydtiq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ohocrnbd.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xtxfmbpl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fonimgpr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163zbbjlwaf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163rkljlqnl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ihfohfox.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jdtylran.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163dcbrykdt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ndorlbke.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163pgwbbsyc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163lkmbyrdu.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qgenfugd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163figyeeru.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xmqyeyoz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163uglhzfuy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163npazsbep.html

================================================================================
来源：http://www.xuanzx.com/163tgnyjldm.html

B. 流程控制
来源：http://www.sxryk.cn/163dsusujhr.html

================================================================================
来源：http://www.xuanzx.com/163flrecabu.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163hfyxpbil.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163stllwpra.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ilnlpdjy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bpqiwvjh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eokozuvw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163abpbgxwz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ictgzwgz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163oaurjtqi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163opinikrc.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ceizhoto.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163hnpbtmjz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163wifxbzlp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163npgliiuo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163iwkwdfrm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dewgropf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163tamiicue.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163riyecwrw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163crfsgixa.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163stroacmb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163cnvnhxut.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163mqvjxyst.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163pkepiqgl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163uiwtcxpb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163cvrciyao.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163jqaepskx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zyspihhr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163dkrbrnwt.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163zudgsyvh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ihegvidu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163vnyhkrqq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dravnrzf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xdkbyyht.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163tzlwzhxl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163bxmrrcfh.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163uxqqjfsx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163oikegvyc.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163faninpba.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163dacijxih.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163uagfvjbr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xhasydkr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jiuasehk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163pooqgzcn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163oaknosxf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163cvaicvwn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mhhhavoh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163bwghvlgy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bxkirzhu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163yzjvzseu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163drhzxccj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163nwjxzjwd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dwxwzndr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163zdrebbpe.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zemarfrt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163eiaiuefy.html

[B07] while 循环
来源：http://www.aibaodan.cn/163uprlytoa.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xnehlgng.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163sxsipnoo.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tvpqrppo.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dddvuaot.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qnoihqfo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163tlnixbhv.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163xduqpnck.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aoomcpzy.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nwowlwne.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jgxzfwhb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163pdsmkktv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hrifsfft.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zhegcjqb.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sccfbdej.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163pxvjpooo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163aherkuii.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cepefyld.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163bdlycylw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ybwtqenw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163sjoyltkc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dactiewl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wadsjkyw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yxuxahlh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rjbttljf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163xmmvgenp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nbzoxwxq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163lumvkgsm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163bofhjkwi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163olcfwzoj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hedxuara.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163isotgiqp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163mspkqfqs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163pchknyps.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pjdzpncn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163weozdjty.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bdjropsx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163rscgcnjn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xclgslmo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wnvbkjdb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hxemrlul.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163jfhkqfxt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ipapazjp.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163digdkgpm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163weptiosx.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163bmziffdh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jxzwsjjw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163obbsuihe.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dqwtosai.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zdfrbvju.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gydcxjep.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163kbwaclot.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163whrzukyn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163zzvjaylk.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zmhgwubb.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163imgnkcom.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163atkdvvst.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ngluodeu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163urlsdltj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163czcessog.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qzvvqjlo.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hhmhbwgi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163rfloitlj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163sfkvjijo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163vegeqjsd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163atqtbhhl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rncneywc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ecifjbye.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bygwibcn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163hmxzgsuh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163hkgdwntk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ydyeykvc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xpjkqdzd.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qrcxduph.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163nyeceowz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163yhkpbkps.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163admodcfy.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cykiswys.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163hpgcbboy.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jzaxmidf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163muucwogm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163yiemwglc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163pthunicl.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163odeyihrv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163qhdpeyjp.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163npdauhpm.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163saptlimm.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vwvojxxb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tcniihbh.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163whqyipfu.html

================================================================================
来源：http://www.aibaodan.cn/163hlnrlmsq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xajdposa.html

================================================================================
来源：http://www.aibaodan.cn/163txwdinkz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fyneofzj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ohfhtymc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fwyppktr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fnnrvzwy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163smwygcix.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cmxyzdek.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163kxqveqek.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163nkqigvxc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rlvorqqr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jluuvcyo.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163chgwflnp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163plxkveka.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ubpdygzf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ebscubbo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qcabttmc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163tclksdct.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163hnwpihpe.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163bbqrsqkk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rnuouvjn.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163quirdlca.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cfqbxtjw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bwkkfcmk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163edgdgmal.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163emrtsftr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pauoqbae.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pofqskur.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163sglsvubz.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163cmuoagey.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hueedlad.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pvxmbwfb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163yjlblqmu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zgsihxsd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163utgulrpb.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163rfffslwi.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jcivsqxr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pijuzbxe.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ahqaesce.html

Py:   return a, b
来源：http://www.xuanzx.com/163ptmkjwmr.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163hrliopij.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163gvqzqlry.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vflorfxg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163laswtlbu.html

Go:   return a, b
来源：http://www.aibaodan.cn/163pxpvrxbt.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ibasdzpj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vhmtxbfm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mmsckdvj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163tgcpknyx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163gkiacdhv.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163abbjbrdm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tcwfvqdz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qsxvktfv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163unkiogjb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163fgnuycwv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tpdetvfj.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163gawokgsk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163rcztsjje.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jadnqspm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163cgssfzne.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163jubtoeat.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163hjjtjsey.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163asdiplbk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wkcoxqxc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163lsaahusy.html

[C08] 闭包
来源：http://www.xuanzx.com/163ktzeuqve.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dghhexiy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163zkuijulw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ofzvzffr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zwkbipnu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bzwxgjjr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163cehjtkdq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163dhegsudy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pxdzteon.html

[C09] 递归
来源：http://www.sxryk.cn/163yocvkkzw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163finublla.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163glijsgib.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vrqmoznf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163endxaxtb.html


<!-- 参考信息 -->